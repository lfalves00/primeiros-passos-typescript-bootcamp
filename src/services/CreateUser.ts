
interface TechObject {
  title: string;
  experience: number;
}

interface createUserData {
  name?: string;
  email: string;
  password: string;
  techs: Array<string | TechObject>;
  favoriteLangs: string[]
}

export default function createUser({name, email, password, techs, favoriteLangs}: createUserData) {
  const user = {
    name,
    email,
    password,
    techs,
    favoriteLangs
  }

  return user
}