export type apiProps = {
  date: number;
  explanation: string;
  url: string;
  title: string;
};

export type ProfileProps = {
  data: {
    login: string;
    bio: string;
    avatar_url: string;
  };
};
