"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import Avatar from "../../../../../public/avatar.png"

export default function Page() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="w-full h-full p-4">
      <div className="w-full mx-auto">
        <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

        <Tabs defaultValue="overview" onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-3 mb-8 max-w-full">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="w-full">
            <div className="grid gap-6 w-full">
              <Card className="w-full">
                <CardHeader>
                  <CardTitle>Welcome Back</CardTitle>
                  <CardDescription>Here is a summary of your account</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col space-y-1.5">
                      <label htmlFor="name">Name</label>
                      <Input
                        className="focus-visible:ring-offset-0 focus-visible:ring-0"
                        id="name"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <label htmlFor="email">Email</label>
                      <Input
                        className="focus-visible:ring-offset-0 focus-visible:ring-0"
                        id="email"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col sm:flex-row justify-between gap-3">
                  <Button variant="outline" className="w-full sm:w-auto">
                    Cancel
                  </Button>
                  <Button className="w-full sm:w-auto">Save Changes</Button>
                </CardFooter>
              </Card>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
                <Card className="w-full">
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      {[1, 2, 3].map((item) => (
                        <li key={item} className="flex items-center gap-4">
                          <Image
                            src={Avatar || "/placeholder.svg"}
                            alt="avatar"
                            width={40}
                            height={40}
                            className="h-10 w-10 rounded-full bg-gray-200 object-cover"
                          />
                          <div>
                            <p className="text-sm font-medium">Activity {item}</p>
                            <p className="text-xs text-gray-500">2 hours ago</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="w-full">
                  <CardHeader>
                    <CardTitle>Quick Stats</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex flex-col">
                        <span className="text-2xl font-bold">24</span>
                        <span className="text-sm text-gray-500">Tasks</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-2xl font-bold">8</span>
                        <span className="text-sm text-gray-500">Projects</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-2xl font-bold">16</span>
                        <span className="text-sm text-gray-500">Completed</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-2xl font-bold">4</span>
                        <span className="text-sm text-gray-500">Teams</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="w-full">
            <Card className="w-full">
              <CardHeader>
                <CardTitle>Analytics</CardTitle>
                <CardDescription>View your analytics data here</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] w-full bg-gray-100 rounded-md flex items-center justify-center">
                  <p className="text-gray-500">Analytics chart placeholder</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="w-full">
            <Card className="w-full">
              <CardHeader>
                <CardTitle>Settings</CardTitle>
                <CardDescription>Manage your account settings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 max-w-md">
                  <div className="space-y-2">
                    <label htmlFor="username">Username</label>
                    <Input
                      className="focus-visible:ring-offset-0 focus-visible:ring-0"
                      id="username"
                      placeholder="Username"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="password">Password</label>
                    <Input
                      className="focus-visible:ring-offset-0 focus-visible:ring-0"
                      id="password"
                      type="password"
                      placeholder="Password"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="notifications">Notifications</label>
                    <div className="flex items-center space-x-2">
                      <input
                        className="focus-visible:ring-offset-0 focus-visible:ring-0"
                        type="checkbox"
                        id="notifications"
                      />
                      <label htmlFor="notifications" className="text-sm">
                        Enable email notifications
                      </label>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full sm:w-auto">Save Settings</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

