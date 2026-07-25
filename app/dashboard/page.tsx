"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

interface Booking {
  id: string;
  name: string;
  phone: string;
  email: string;
  preferredDate: string | null;
  preferredTime: string | null;
  practiceArea: string;
  message: string;
  status: string;
  createdAt: string;
}

const STATUS_COLORS: Record<string, string> = {
  pending: "#d6b56c",
  confirmed: "#22c55e",
  rejected: "#ef4444",
};

const PIE_COLORS = [
  "#14342f",
  "#b78a35",
  "#36534d",
  "#d6b56c",
  "#9a712b",
  "#173b35",
];

export default function DashboardPage() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<
    "all" | "pending" | "confirmed" | "rejected"
  >("all");
  const [actionLoading, setActionLoading] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/api/bookings");
        if (res.ok) {
          const data = await res.json();
          setBookings(data);
        }
      } catch {
        // DB might not be configured
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  async function handleSignOut() {
    await fetch("/api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "logout" }),
    });
    router.push("/dashboard/login");
    router.refresh();
  }

  async function updateStatus(id: string, status: string) {
    setActionLoading(id);
    try {
      const res = await fetch(`/api/bookings/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });
      if (res.ok) {
        setBookings((prev) =>
          prev.map((b) => (b.id === id ? { ...b, status } : b))
        );
      }
    } catch {
      // handle error
    } finally {
      setActionLoading(null);
    }
  }

  const filtered =
    filter === "all"
      ? bookings
      : bookings.filter((b) => b.status === filter);

  const statusCounts = {
    pending: bookings.filter((b) => b.status === "pending").length,
    confirmed: bookings.filter((b) => b.status === "confirmed").length,
    rejected: bookings.filter((b) => b.status === "rejected").length,
  };

  const statusPieData = [
    { name: "Pending", value: statusCounts.pending },
    { name: "Confirmed", value: statusCounts.confirmed },
    { name: "Rejected", value: statusCounts.rejected },
  ].filter((d) => d.value > 0);

  const practiceAreaCounts: Record<string, number> = {};
  bookings.forEach((b) => {
    practiceAreaCounts[b.practiceArea] =
      (practiceAreaCounts[b.practiceArea] || 0) + 1;
  });
  const practiceAreaData = Object.entries(practiceAreaCounts).map(
    ([name, value]) => ({ name, value })
  );

  const dailyCounts: Record<string, number> = {};
  bookings.forEach((b) => {
    const date = new Date(b.createdAt).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
    });
    dailyCounts[date] = (dailyCounts[date] || 0) + 1;
  });
  const timelineData = Object.entries(dailyCounts)
    .map(([date, count]) => ({ date, count }))
    .slice(-14);

  return (
    <section className="min-h-[80vh] bg-[#f8f5ef] px-6 py-10 text-[#14342f] lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#b78a35]">
              Admin dashboard
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              Appointments & Analytics
            </h1>
          </div>

          <button
            onClick={handleSignOut}
            className="inline-flex items-center justify-center rounded-full border border-[#14342f]/20 px-6 py-3 text-sm font-semibold transition hover:border-[#14342f] hover:bg-white"
          >
            Sign Out
          </button>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          <StatusCard
            label="Pending"
            count={statusCounts.pending}
            color="bg-[#d6b56c]"
          />
          <StatusCard
            label="Confirmed"
            count={statusCounts.confirmed}
            color="bg-green-500"
          />
          <StatusCard
            label="Rejected"
            count={statusCounts.rejected}
            color="bg-red-500"
          />
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-[2rem] border border-[#14342f]/10 bg-white p-6 sm:p-8">
            <h2 className="text-lg font-semibold">Bookings Over Time</h2>
            {timelineData.length > 0 ? (
              <div className="mt-6 h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={timelineData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="date" tick={{ fontSize: 12 }} />
                    <YAxis allowDecimals={false} tick={{ fontSize: 12 }} />
                    <Tooltip />
                    <Bar
                      dataKey="count"
                      fill="#14342f"
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            ) : (
              <p className="mt-6 text-sm text-[#14342f]/50">
                No data yet. Bookings will appear here once submissions come
                in.
              </p>
            )}
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-[2rem] border border-[#14342f]/10 bg-white p-6 sm:p-8">
              <h2 className="text-lg font-semibold">By Practice Area</h2>
              {practiceAreaData.length > 0 ? (
                <div className="mt-4 h-48">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={practiceAreaData}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={70}
                        label={({ name, percent }) =>
                          `${name} ${((percent ?? 0) * 100).toFixed(0)}%`
                        }
                        labelLine={false}
                        style={{ fontSize: 10 }}
                      >
                        {practiceAreaData.map((_, index) => (
                          <Cell
                            key={index}
                            fill={PIE_COLORS[index % PIE_COLORS.length]}
                          />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              ) : (
                <p className="mt-4 text-sm text-[#14342f]/50">
                  No data yet.
                </p>
              )}
            </div>

            <div className="rounded-[2rem] border border-[#14342f]/10 bg-white p-6 sm:p-8">
              <h2 className="text-lg font-semibold">Status Breakdown</h2>
              {statusPieData.length > 0 ? (
                <div className="mt-4 h-48">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={statusPieData}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={70}
                      >
                        {statusPieData.map((entry) => (
                          <Cell
                            key={entry.name}
                            fill={
                              STATUS_COLORS[
                                entry.name.toLowerCase()
                              ] || "#999"
                            }
                          />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              ) : (
                <p className="mt-4 text-sm text-[#14342f]/50">
                  No data yet.
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-[2rem] border border-[#14342f]/10 bg-white p-6 sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-lg font-semibold">Appointments Queue</h2>

            <div className="flex gap-2">
              {(["all", "pending", "confirmed", "rejected"] as const).map(
                (s) => (
                  <button
                    key={s}
                    onClick={() => setFilter(s)}
                    className={`rounded-full px-4 py-2 text-xs font-semibold capitalize transition ${
                      filter === s
                        ? "bg-[#14342f] text-white"
                        : "bg-[#f8f5ef] text-[#14342f]/60 hover:text-[#14342f]"
                    }`}
                  >
                    {s}
                    {s !== "all" && (
                      <span className="ml-1">
                        ({s === "pending"
                          ? statusCounts.pending
                          : s === "confirmed"
                            ? statusCounts.confirmed
                            : statusCounts.rejected})
                      </span>
                    )}
                  </button>
                )
              )}
            </div>
          </div>

          {loading ? (
            <div className="mt-8 text-center text-sm text-[#14342f]/50">
              Loading appointments...
            </div>
          ) : filtered.length === 0 ? (
            <div className="mt-8 text-center text-sm text-[#14342f]/50">
              {bookings.length === 0
                ? "No appointment requests yet. Submissions from the contact form will appear here."
                : `No ${filter} appointments.`}
            </div>
          ) : (
            <div className="mt-6 space-y-4">
              {filtered.map((booking) => (
                <div
                  key={booking.id}
                  className="rounded-2xl border border-[#14342f]/8 bg-[#f8f5ef] p-5 transition hover:border-[#b78a35]/40 sm:p-6"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <h3 className="text-lg font-semibold">
                          {booking.name}
                        </h3>
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-semibold capitalize ${
                            booking.status === "pending"
                              ? "bg-[#d6b56c]/20 text-[#9a712b]"
                              : booking.status === "confirmed"
                                ? "bg-green-100 text-green-700"
                                : "bg-red-100 text-red-700"
                          }`}
                        >
                          {booking.status}
                        </span>
                      </div>

                      <div className="mt-3 grid gap-2 text-sm text-[#14342f]/65 sm:grid-cols-2 lg:grid-cols-3">
                        <p>
                          <span className="font-medium text-[#14342f]">
                            Phone:
                          </span>{" "}
                          {booking.phone}
                        </p>
                        <p>
                          <span className="font-medium text-[#14342f]">
                            Email:
                          </span>{" "}
                          {booking.email}
                        </p>
                        <p>
                          <span className="font-medium text-[#14342f]">
                            Practice Area:
                          </span>{" "}
                          {booking.practiceArea}
                        </p>
                        {booking.preferredDate && (
                          <p>
                            <span className="font-medium text-[#14342f]">
                              Preferred Date:
                            </span>{" "}
                            {booking.preferredDate}
                          </p>
                        )}
                        {booking.preferredTime && (
                          <p>
                            <span className="font-medium text-[#14342f]">
                              Preferred Time:
                            </span>{" "}
                            {booking.preferredTime}
                          </p>
                        )}
                        <p>
                          <span className="font-medium text-[#14342f]">
                            Submitted:
                          </span>{" "}
                          {new Date(booking.createdAt).toLocaleDateString(
                            "en-IN",
                            {
                              day: "2-digit",
                              month: "short",
                              year: "numeric",
                              hour: "2-digit",
                              minute: "2-digit",
                            }
                          )}
                        </p>
                      </div>

                      <p className="mt-3 text-sm leading-6 text-[#14342f]/70">
                        {booking.message}
                      </p>
                    </div>

                    {booking.status === "pending" && (
                      <div className="flex gap-2 sm:flex-col">
                        <button
                          onClick={() =>
                            updateStatus(booking.id, "confirmed")
                          }
                          disabled={actionLoading === booking.id}
                          className="inline-flex items-center justify-center gap-2 rounded-full bg-green-600 px-5 py-2.5 text-xs font-semibold text-white transition hover:bg-green-700 disabled:opacity-50"
                        >
                          <svg
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            className="h-4 w-4"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path d="m5 12 4 4L19 6" />
                          </svg>
                          Approve
                        </button>

                        <button
                          onClick={() =>
                            updateStatus(booking.id, "rejected")
                          }
                          disabled={actionLoading === booking.id}
                          className="inline-flex items-center justify-center gap-2 rounded-full border border-red-200 px-5 py-2.5 text-xs font-semibold text-red-600 transition hover:bg-red-50 disabled:opacity-50"
                        >
                          <svg
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            className="h-4 w-4"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path d="M18 6 6 18M6 6l12 12" />
                          </svg>
                          Reject
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function StatusCard({
  label,
  count,
  color,
}: {
  label: string;
  count: number;
  color: string;
}) {
  return (
    <div className="rounded-[1.5rem] border border-[#14342f]/10 bg-white p-6">
      <div className="flex items-center gap-3">
        <span className={`h-3 w-3 rounded-full ${color}`} />
        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#14342f]/60">
          {label}
        </p>
      </div>
      <p className="mt-3 text-4xl font-semibold">{count}</p>
    </div>
  );
}
