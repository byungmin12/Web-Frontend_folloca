import create from "zustand";interface ILocationStore { //ts를 사용하기때문에 타입지정이 필요    location: string;    setNewLocation: (newLotion: string) => void;}export const useLocationStore = create<ILocationStore>((set) => ({    location: "root",    setNewLocation: (newLotion:string) => set(() => ({ location: newLotion })),}));