import { ReactNode } from "react";

export type HomeProps = {
  username: string;
};

export type NavBarProps = {
  username: string;
};

export type CampingAreaProps = {
    username: string;
  };

export type CampingDetailsProps = {
  username: string;
}

export type CampingArea = {
  id: number;
  name: string;
  imageUrl?: string;
  coordinates: { lat: number; lng: number };
  availability: boolean;
};

export type UserData = {
  name: string;
  email: string;
}

export type UserContextProps = {
  user: UserData | null;
  loginUser: (userData: UserData) => void;
  logoutUser: () => void;
}

export type UserProviderProps = {
    children: ReactNode;
  }