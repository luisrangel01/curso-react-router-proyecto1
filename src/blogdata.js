const roles = {
  admin: { read: true, write: true, delete: true, type: "admin" },
  editor: { read: true, write: true, delete: true, type: "editor" },
  student: { read: true, write: true, delete: false, type: "student" },
};

const users = [
  { username: "luisrangelc", rol: roles.admin, name: "Luis Rangel" },
  { username: "kennethrc", rol: roles.admin, name: "Kenneth Rangel" },
  { username: "rociorangelp", rol: roles.student, name: "Rocio Rangel" },
  { username: "rodrigorangelp", rol: roles.student, name: "Rodrigo Rangel" },
];

export { users, roles };
