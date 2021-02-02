export interface Recipe {
  id: number;
  name: string;
  ingredients?: string[];
  timeRequired?: string;
  imageUrl?: string;
  owner?: string;
  instructions?: string;
  tags?: string[];
}