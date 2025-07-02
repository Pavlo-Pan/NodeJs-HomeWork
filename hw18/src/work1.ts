type Admin = {
  name: string;
  permissions: string[];
};

type User = {
  name: string;
  email: string;
};


export type AdminUser = Admin & User;