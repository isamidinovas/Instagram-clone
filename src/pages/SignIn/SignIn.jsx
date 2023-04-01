import React from "react";

import { Button, FormControl, Input, Link, Typography } from "@mui/joy";
import { Box } from "@mui/system";

import styles from "./SignIn.module.css";
import styled from "@emotion/styled";
import { Facebook } from "@mui/icons-material";
export const SignIn = () => {
  return (
    <div className={styles.wrapper}>
      <Box
        display="flex"
        gap={1}
        flexDirection="column"
        maxWidth={250}
        margin="10px auto"
        textAlign="center"
        border=" 1px solid rgb(233, 230, 230)"
        padding="40px 20px"
      >
        <div className={styles.box}>
          <Typography level="h4" component="h1">
            <b>Instagram</b>
          </Typography>
          <Typography level="body2">
            Зарегистрируйтесь, чтобы смотреть фото и видео ваших друзей.
          </Typography>
          <Button sx={{ mt: 1, width: "250px" }}>
            <Facebook sx={{ marginRight: "7px" }} />
            Войти через Facebook
          </Button>
        </div>
        <div className={styles.inputs}>
          <p className={styles.text}>или</p>
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
            name="name"
            type="text"
            placeholder="имя и фамилия"
          />
        </FormControl>
        <FormControl>
          <Input
            sx={{ borderRadius: "1px" }}
            name="name2"
            type="text"
            placeholder="имя пользователя"
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
        <Typography variant="body2" color="text.secondary" fontSize={12}>
          Люди, которые пользуются нашим сервисом, могли загрузить вашу
          контактную информацию в Instagram. <a href="#">Подробнее</a>
        </Typography>
        <Typography variant="body2" color="text.secondary" fontSize={12}>
          Регистрируясь, вы принимаете наши{" "}
          <a href="#">
            Условия, Политику конфиденциальности и Политику в отношении файлов
            cookie.
          </a>
        </Typography>
        <Button sx={{ mt: 1 }}>Регистрация</Button>
      </Box>

      <Typography
        maxWidth="250px"
        margin="4px auto"
        endDecorator={<Link href="/signUp">Sign up</Link>}
        fontSize="sm"
        sx={{ alignSelf: "center" }}
        display="flex"
        justifyContent="center"
        border="1px solid rgb(233, 230, 230)"
        padding={2}
      >
        Есть аккаунт?
      </Typography>
    </div>
  );
};
