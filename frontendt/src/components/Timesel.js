import React, { useState } from "react";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { createTheme } from "@material-ui/core/styles";
import {
  Fade,
  FadeIn,
  MoveOut,
  Move,
  ScrollContainer,
  Zoom,
  ScrollPage,
  Sticky,
  StickyIn,
  batch,
  Animator,
  ZoomIn,
  MoveIn,
} from "react-scroll-motion";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticTimePicker } from "@mui/x-date-pickers/StaticTimePicker";
import NeumorphismButton from "./NeumorphismButton";
import { ThemeProvider } from "@material-ui/styles";
import ParticlesBackground from "./ParticlesBackground";

export default function ResponsiveTimePickers() {
  const [tableData, setTableData] = useState([]);

  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Sticky(), Move());
  const [startTime, setStartTime] = useState(dayjs("2022-04-17T15:30"));
  const [stopTime, setStopTime] = useState(dayjs("2022-04-17T17:30"));
  const handleLogValues = () => {
    console.log("Start Time:", startTime.format("HH:mm"));
    console.log("Stop Time:", stopTime.format("HH:mm"));
  };
  const generateTable = () => {
    const startHour = parseInt(startTime.format("HH"), 10);
    const stopHour = parseInt(stopTime.format("HH"), 10);
    if (startHour >= stopHour) {
      alert(
        "Invalid time range. Please ensure the start time is before the stop time."
      );
      return;
    }

    const timeIntervals = [];
    for (let hour = startHour; hour <= stopHour; hour++) {
      const nextHour = hour + 1;
      if (nextHour <= stopHour) {
        const column = `${hour}-${nextHour}`;
        timeIntervals.push(column);
      }
    }

    setTableData(timeIntervals);
  };

  return (
    <div className="p-4 text-white">
      <ParticlesBackground />
      <ScrollContainer className=" text-green-400 font-sans font-bold">
        {/* this should be the root */}
        {/* ()er bhetore default center that is 50-50 */}
        <ScrollPage>
          <Animator animation={batch(Sticky(), Fade(), MoveOut(0, -200))}>
            <h2 className=" text-green-500 font-sans font-bold  text-3xl relative">
              Please enter the hours between which you can accept appointments
            </h2>
          </Animator>
        </ScrollPage>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["StaticTimePicker"]}>
            <div className="flex relative  justify-center flex-col  md:flex-row md:space-x-16 ">
              <DemoItem label="Start time">
                <StaticTimePicker
                  value={startTime}
                  onChange={(newValue) => setStartTime(newValue)}
                />
              </DemoItem>
              <DemoItem label="Stop time">
                <StaticTimePicker
                  value={stopTime}
                  onChange={(newValue) => setStopTime(newValue)}
                />
              </DemoItem>
            </div>
            <div className="flex relative justify-center text-sm">
              <NeumorphismButton
                buttonText="Submit Time"
                onClick={() => {
                  handleLogValues();
                  generateTable();
                }}
              />
            </div>
          </DemoContainer>
        </LocalizationProvider>

        <ScrollPage>
          <Animator animation={ZoomInScrollOut}>
            <h2 className="text-green-600 text-2xl flex flex-col items-center justify-center">
              Here's what your time slots look like!{" "}
            </h2>
            <div className="flex flex-col items-center relative">
              {tableData.length > 0 && (
                <div className="w-full relative text-green-800">
                  <table
                    border="1"
                    className="table-auto m-auto w-1/3 border border-slate-400 md:table-fixed"
                  >
                    <thead>
                      <tr>
                        <th className="border text-green-400 border-slate-300">
                          Day/Time
                        </th>
                        {tableData.map((column, index) => (
                          <th
                            className="border text-green-400 border-slate-300"
                            key={index}
                          >
                            {column}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        "Monday",
                        "Tuesday",
                        "Wednesday",
                        "Thursday",
                        "Friday",
                        "Saturday",
                        "Sunday",
                      ].map((day, index) => (
                        <tr key={index}>
                          <td className="border font-mono font-light text-gray-300 border-slate-300">
                            {" "}
                            {day}
                          </td>
                          {tableData.map((column, columnIndex) => (
                            <td
                              key={columnIndex}
                              className="border border-slate-300"
                            >
                              {/* Your cell content here */}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </Animator>
        </ScrollPage>
      </ScrollContainer>
    </div>
  );
}
