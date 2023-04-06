const roles = {
  admin: { read: true, write: true, delete: true },
  editor: { read: true, write: true, delete: true },
  student: { read: true, write: true, delete: false },
};

const users = [
  { username: "luisrangelc", rol: roles.admin },
  { username: "kennethrc", rol: roles.admin },
  { username: "rociorangelp", rol: roles.student },
  { username: "rodrigorangelp", rol: roles.student },
];

export { users, roles };
