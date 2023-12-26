import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from "react-icons/ri";

export const GENERAL_MENU = {
  Dashboard: {
    path: "/dashboard",
    icon: RiDashboardLine,
  },
  Usuários: {
    path: "/users",
    icon: RiContactsLine,
  },
};

export const AUTOMATION_MENU = {
  Formulários: {
    path: "/forms",
    icon: RiInputMethodLine,
  },
  Automação: {
    path: "/automation",
    icon: RiGitMergeLine,
  },
};
