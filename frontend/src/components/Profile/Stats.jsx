import React from "react";
import { Card, CardHeader, CardContent, CardTitle } from "../ui/card";
import { BarChart4, LineChart, UserRoundCheck } from "lucide-react";
export default function Stats({ data }) {
  return (
    <div className="">
      <div className="flex gap-2 items-center">
        <Card className="w-[50%]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1">
            <CardTitle className="text-lg font-medium text-muted-foreground">
              Reach
            </CardTitle>
            <BarChart4 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-right">{data?.reach}</div>
            <p className="text-s text-muted-foreground text-right">
              +20.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card className="w-[50%]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1">
            <CardTitle className="text-lg font-medium text-muted-foreground">
              Engagement
            </CardTitle>
            <LineChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-right">
              {data?.engagement}
            </div>
            <p className="text-s text-muted-foreground text-right">
              +7.7% from last month
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="flex gap-2 items-center mt-2">
        <Card className="w-[50%]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1">
            <CardTitle className="text-lg font-medium text-muted-foreground">
              Following
            </CardTitle>
            <UserRoundCheck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-right">
              {data?.following}
            </div>
            <p className="text-s text-muted-foreground text-right">
              +3.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card className="w-[50%]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1">
            <CardTitle className="text-lg font-medium text-muted-foreground">
              Followers
            </CardTitle>
            <UserRoundCheck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-right">
              {data?.follower}
            </div>
            <p className="text-s text-muted-foreground text-right">
              +1.1% from last month
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
