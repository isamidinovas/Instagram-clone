import React from "react";

import { Button, FormControl, Input, Typography } from "@mui/joy";
import { Box } from "@mui/system";
import styles from "./SignUp.module.css";
import styled from "@emotion/styled";
import { Facebook } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
export const SignUp = () => {
  return (
    <div className={styles.wrapper}>
      <Box
        display="flex"
        gap={1}
        flexDirection="column"
        maxWidth={250}
        margin=" auto"
        marginBottom="10px"
        marginTop="90px"
        textAlign="center"
        border=" 1px solid rgb(233, 230, 230)"
        padding="20px 20px"
      >
        <div className={styles.box}>
          <Typography level="h4" component="h1" sx={{ margin: "20px auto" }}>
            <b>Instagram</b>
          </Typography>
        </div>

        <FormControl>
          <Input
            sx={{ borderRadius: "1px" }}
            name="email"
            type="email"
            placeholder="моб. телефон или эл. адрес"
          />
        </FormControl>
        <FormControl>
          <Input
            sx={{ borderRadius: "1px" }}
            name="password"
            type="password"
            placeholder="пароль"
          />
        </FormControl>
        <Button sx={{ mt: 1, width: "250px" }}>Войти</Button>
        <div className={styles.inputs}>
          <p className={styles.text}>или</p>
        </div>

        <Typography
          variant="body2"
          color="text.secondary"
          fontSize={12}
          display="flex"
          alignItems="center"
          gap="5px"
          justifyContent="center"
        >
          <Facebook sx={{ color: "#0000ff" }} />
          Войти через Facebook
          <a href="#"></a>
        </Typography>

        <Typography variant="body2" color="text.secondary" fontSize={12}>
          <a href="#"> Забыли пароль?</a>
        </Typography>
      </Box>

      <Typography
        color="text.secondary"
        maxWidth="260px"
        margin="0px auto"
        endDecorator={<NavLink to="/signIn">Зарегистрироваться </NavLink>}
        fontSize="12px"
        sx={{ alignSelf: "center" }}
        display="flex"
        justifyContent="center"
        border="1px solid rgb(233, 230, 230)"
        padding={2}
      >
        У вас еще нету аккаунтa?
      </Typography>
    </div>
  );
};
