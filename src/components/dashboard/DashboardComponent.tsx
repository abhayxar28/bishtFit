"use client";

import React, { useEffect, useState } from "react";
import { Check, Archive } from "lucide-react";

type Tab = "user" | "archive" | "session";
type SessionFilter = "all" | "completed" | "pending";

interface User {
  id: string;
  name: string;
  email: string;
  phoneNumber: string;
  message: string;
  sessionDone?: boolean;
  archived?: boolean;
}

export default function DashboardComponent() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<Tab>("user");
  const [sessionFilter, setSessionFilter] = useState<SessionFilter>("all");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("/api/user");
        const data = await res.json();

        // Ensure the response is an array
        if (Array.isArray(data)) {
          setUsers(
            data.map((user: User) => ({
              ...user,
              archived: user.archived ?? false,
            }))
          );
        } else {
          console.error("Expected array but got:", data);
        }
      } catch (error) {
        console.error("User fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const toggleSessionDone = (userId: string) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === userId ? { ...user, sessionDone: !user.sessionDone } : user
      )
    );
  };

  const archiveUser = (userId: string) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === userId ? { ...user, archived: true } : user
      )
    );
  };

  const unarchiveUser = (userId: string) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === userId ? { ...user, archived: false } : user
      )
    );
  };

  const getFilteredUsers = (): User[] => {
    let filtered = users;

    if (activeTab === "user") {
      filtered = users.filter((u) => !u.archived);
    } else if (activeTab === "archive") {
      filtered = users.filter((u) => u.archived);
    } else if (activeTab === "session") {
      filtered = users.filter((u) => !u.archived);
      if (sessionFilter === "completed") {
        filtered = filtered.filter((u) => u.sessionDone);
      } else if (sessionFilter === "pending") {
        filtered = filtered.filter((u) => !u.sessionDone);
      }
    }

    return filtered;
  };

  const filteredUsers = getFilteredUsers();

  return (
    <div className="min-h-screen bg-black text-white px-4 sm:px-6 md:px-10 py-4">
      {/* Tabs */}
      <div className="flex flex-wrap justify-center space-x-6 sm:space-x-10 md:space-x-20 border-b border-white/20 pb-2 mb-4">
        {(["User", "Archive"] as const).map((tab) => {
          const tabKey = tab.toLowerCase() as Tab;
          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tabKey)}
              className={`relative text-base sm:text-lg font-semibold transition-colors ${
                activeTab === tabKey ? "text-white" : "text-white/50"
              }`}
            >
              {tab}
              {activeTab === tabKey && (
                <div className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#ceff00]" />
              )}
            </button>
          );
        })}
      </div>

      {/* Session Filters */}
      {activeTab === "session" && (
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 mb-10">
          {(["All", "Completed", "Pending"] as const).map((filter) => {
            const filterKey = filter.toLowerCase() as SessionFilter;
            return (
              <button
                key={filter}
                onClick={() => setSessionFilter(filterKey)}
                className={`text-sm font-medium px-4 py-1 rounded-full transition-colors border ${
                  sessionFilter === filterKey
                    ? "bg-[#ceff00] text-black border-[#ceff00]"
                    : "border-white/30 text-white/60"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>
      )}

      {/* Loading or Empty State */}
      {loading ? (
        <div className="text-center text-white mt-10">Loading users...</div>
      ) : filteredUsers.length === 0 ? (
        <div className="text-center text-white">No users found.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 sm:gap-10 mt-8">
          {filteredUsers.map((user) => (
            <div
              key={user.id}
              className={`relative w-full rounded-2xl p-5 shadow-md border ${
                user.sessionDone ? "border-green-500" : "border-red-400"
              } bg-[#1a1a1a]`}
            >
              {/* Session Done Toggle */}
              <div
                className="absolute top-3 left-3 w-6 h-6 bg-black rounded-md border border-white flex items-center justify-center cursor-pointer"
                onClick={() => toggleSessionDone(user.id)}
                title="Toggle session status"
              >
                {user.sessionDone && <Check size={16} />}
              </div>

              {/* Archive Toggle */}
              <div
                className="absolute top-3 right-3 w-6 h-6 bg-black rounded-md border border-white flex items-center justify-center cursor-pointer"
                onClick={() =>
                  activeTab === "archive"
                    ? unarchiveUser(user.id)
                    : archiveUser(user.id)
                }
                title={activeTab === "archive" ? "Unarchive" : "Archive"}
              >
                <Archive
                  size={16}
                  className={activeTab === "archive" ? "rotate-180" : ""}
                />
              </div>

              {/* User Info */}
              <div className="mt-10 space-y-3 text-sm sm:text-base">
                <div>
                  <p className="text-white/60 font-medium">Name</p>
                  <p className="font-semibold text-white">{user.name}</p>
                </div>
                <div>
                  <p className="text-white/60 font-medium">Email</p>
                  <p className="text-white">{user.email}</p>
                </div>
                <div>
                  <p className="text-white/60 font-medium">Phone</p>
                  <p className="text-white">{user.phoneNumber}</p>
                </div>
                <div>
                  <p className="text-white/60 font-medium">Message</p>
                  <p className="text-white break-words">{user.message}</p>
                </div>
                <div>
                  <p className="text-white/60 font-medium">Session</p>
                  <p className="text-white">
                    {user.sessionDone ? "✅ Completed" : "❌ Pending"}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
