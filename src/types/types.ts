export type HomeProps = {
  username: string;
};

export type NavBarProps = {
  username: string;
};

export type CampingAreaProps = {
    username: string;
  };

export type CampingArea = {
  id: number;
  name: string;
  imageUrl?: string;
  coordinates: { lat: number; lng: number };
  availability: boolean;
};
