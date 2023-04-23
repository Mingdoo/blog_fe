import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Swal from "sweetalert2";
import { makeStyles } from "@mui/styles";
import {
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://github.com/mingdoo">
        15:18
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyle = makeStyles({
  input: {
    "& input[type=number]": {
      "-moz-appearance": "textfield",
    },
    "& input[type=number]::-webkit-outer-spin-button": {
      "-webkit-appearance": "none",
      margin: 0,
    },
    "& input[type=number]::-webkit-inner-spin-button": {
      "-webkit-appearance": "none",
      margin: 0,
    },
  },
});

export default function signup() {
  const [isIDValid, setIsIDValid] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [options, setOptions] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setOptions(typeof value === "string" ? value.split(",") : value);
  };

  useEffect(() => {
    console.log(options);
  }, [options]);

  const onChangePassword = (event, target) => {
    const data = event.target.value;

    const pw = document.getElementById("password").value;
    const pwConf = document.getElementById("passwordConfirmation").value;

    if (target == "pwConf" && pw == pwConf) {
      setIsValid(isIDValid);
    }
  };

  const classes = useStyle();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      bizId: data.get("bizId"),
      bizName: data.get("bizName"),
      ID: document.getElementById("ID")?.value,
      password: data.get("password"),
      passwordConfirmation: data.get("passwordConfirmation"),
    });
  };

  const doConfirmProcess = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, use it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          "Confirmed!",
          "Your login ID has been confirmed.",
          "success",
        ).then(() => {
          document.getElementById("password").focus();
          setIsIDValid(true);
        });
      } else {
        Swal.fire(
          "rejected!",
          "Your login ID confirmation has been rejected.",
          "warning",
        ).then(() => {
          document.getElementById("ID").focus();
        });
      }
    });
  };

  useEffect(() => {
    const pw = document.getElementById("password").value;
    const pwConf = document.getElementById("passwordConfirmation").value;
    if (isIDValid && pw && pwConf && pw == pwConf) {
      setIsValid(true);
    }
  }, [isIDValid]);
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="businessID"
                name="bizId"
                required
                fullWidth
                type="number"
                id="bizId"
                label="business ID"
                autoFocus
                className={classes.input}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="businessName"
                name="bizName"
                required
                fullWidth
                id="bizName"
                label="business name"
                autoFocus
              />
            </Grid>
            <Grid item xs={8}>
              <TextField
                required
                fullWidth
                id="ID"
                label="Login ID"
                name="ID"
                autoComplete="ID"
                disabled={isIDValid}
              />
            </Grid>
            <Grid item xs={4}>
              <Button
                color={isIDValid ? "secondary" : "danger"}
                variant="contained"
                fullWidth
                sx={{ height: "100%" }}
                onClick={() => !isIDValid && doConfirmProcess()}
              >
                confirm
              </Button>
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                onChange={(event) => onChangePassword(event, "pw")}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="passwordConfirmation"
                label="PasswordConfirmation"
                type="password"
                id="passwordConfirmation"
                onChange={(event) => onChangePassword(event, "pwConf")}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl sx={{ width: "100%" }}>
                <InputLabel id="multipleChip">Permitted</InputLabel>

                <Select
                  labelId="multipleChip"
                  id="multipleChipSelect"
                  multiple
                  value={options}
                  onChange={handleChange}
                  input={
                    <OutlinedInput
                      id="select-multiple-chip"
                      label="Permitted"
                    />
                  }
                  renderValue={(selected) => (
                    <Box
                      sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 2.5,
                      }}
                    >
                      {selected.map((value) => (
                        <Chip
                          key={value}
                          label={value}
                          sx={{ backgroundColor: "#3085d6", color: "white" }}
                        />
                      ))}
                    </Box>
                  )}
                  MenuProps={MenuProps}
                >
                  {values.map((name) => (
                    <MenuItem
                      key={name}
                      value={name}
                      sx={{ width: "45%", display: "inline-block" }}
                    >
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={!isValid}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/signin" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 5 }} />
    </Container>
  );
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const values = [
  "Aerosol",
  "Alcohol",
  "Awl",
  "Axe",
  "Bat",
  "Battery",
  "Bullet",
  "Chisel",
  "Electronic cigarettes",
  "Electronic cigarettes_Liquid",
];
