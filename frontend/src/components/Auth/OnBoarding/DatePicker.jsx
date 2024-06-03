import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { Controller } from "react-hook-form";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { DatePicker } from "react-rainbow-components";
export default function DatePickerCustom({ date, setDate, control }) {
  return (
    //this for age verification
    <Controller
      control={control}
      name="dob"
      render={({ field: { onChange, value } }) => (
        <DatePicker
          required
          value={date}
          label="DatePicker Label"
          onChange={onChange}
          borderRadius="semi-square"
        />
      )}
    />
  );
}
