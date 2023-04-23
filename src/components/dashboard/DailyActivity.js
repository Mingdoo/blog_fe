import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import BaseCard from "../baseCard/BaseCard";

const activities = [
  {
    time: "09.50",
    color: "success.main",
    text: "기상",
  },
  {
    time: "09.46",
    color: "secondary.main",
    text: "샤워하기",
  },
  {
    time: "10.00",
    color: "primary.main",
    text: "옷 입기",
  },
  {
    time: "10:50",
    color: "warning.main",
    text: "메타폴리스에서 만나기",
  },
  {
    time: "11:30",
    color: "error.main",
    text: "밥 먹기",
  },
  {
    time: "12:30",
    color: "success.main",
    text: "집 가기",
  },
];

const DailyActivity = () => {
  return (
    <BaseCard title="오늘 데이트 코스">
      <Timeline
        sx={{
          p: 0,
        }}
      >
        {activities.map((activity) => (
          <TimelineItem key={activity.time}>
            <TimelineOppositeContent
              sx={{
                fontSize: "12px",
                fontWeight: "700",
                flex: "0",
              }}
            >
              {activity.time}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot
                variant="outlined"
                sx={{
                  borderColor: activity.color,
                }}
              />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent
              color="text.secondary"
              sx={{
                fontSize: "14px",
              }}
            >
              {activity.text}
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </BaseCard>
  );
};

export default DailyActivity;
