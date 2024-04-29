import { Switch, Typography, TextField } from "@mui/material";
import { teal } from "@mui/material/colors";
import Autocomplete from "@mui/material/Autocomplete";

const Deployment = () => {
  const values = [{ label: "IPL" }, { label: "ANT" }, { label: "HELL" }];

  return (
    <div className="flex gap-4 items-center">
      <div className=" flex items-center  px-5">
        <Switch sx={{ color: teal }} />
        <Typography sx={{ color: "white" }}>Devepolyment mode</Typography>
      </div>

      <form action="/action_page.php" className="">
        <Autocomplete
          className="  bg-gray-200  rounded-md"
          options={values}
          sx={{ width: 100}}
          size='small'
          renderInput={(params) => (
          <TextField {...params} placeholder="IPL"></TextField>
          )}
        ></Autocomplete>
      </form>
    </div>
  );
};

export default Deployment;
