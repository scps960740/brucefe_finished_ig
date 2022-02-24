import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Friend = {
  id: number;
  location: string;
  account: string;
  isFollowing: boolean;
  avatar: string;
};

type friendState = {
  friends: Friend[];
};

const initialState: friendState = {
  friends: [
    {
      id: 1,
      location: "Singapore",
      account: "max_999",
      isFollowing: true,
      avatar: "/images/avatars/a1.png",
    },
    {
      id: 2,
      location: "Singapore",
      account: "fm_999",
      isFollowing: true,
      avatar: "/images/avatars/a2.png",
    },
    {
      id: 3,
      location: "Singapore",
      account: "joanne_999",
      isFollowing: true,
      avatar: "/images/avatars/a3.png",
    },
    {
      id: 4,
      location: "Singapore",
      account: "focus_999",
      isFollowing: true,
      avatar: "/images/avatars/a4.png",
    },
    {
      id: 5,
      location: "Singapore",
      account: "alvin_999",
      isFollowing: true,
      avatar: "/images/avatars/a5.png",
    },
    {
      id: 6,
      location: "Singapore",
      account: "grace_999",
      isFollowing: true,
      avatar: "/images/avatars/a6.png",
    },
    {
      id: 7,
      location: "Singapore",
      account: "rance_999",
      isFollowing: true,
      avatar: "/images/avatars/a7.png",
    },
    {
      id: 8,
      location: "Singapore",
      account: "louis_999",
      isFollowing: true,
      avatar: "/images/avatars/a8.png",
    },
    {
      id: 9,
      location: "Singapore",
      account: "bruce_999",
      isFollowing: true,
      avatar: "/images/avatars/a9.png",
    },
    {
      id: 10,
      location: "Singapore",
      account: "gogo_999",
      isFollowing: true,
      avatar: "/images/avatars/a10.png",
    },
  ],
};

export const friendSlice = createSlice({
  name: "friendsList",
  initialState,
  reducers: {
    follow: (state, action: PayloadAction<number>) => {
      const friends = state.friends;
      for (let i = 0; i < friends.length; i++) {
        const friend = friends[i];
        if (friend.id === action.payload) {
          friend.isFollowing = true;
        }
      }
    },
    unFollow: (state, action: PayloadAction<number>) => {
      const friends = state.friends;
      for (let i = 0; i < friends.length; i++) {
        const friend = friends[i];
        if (friend.id === action.payload) {
          friend.isFollowing = false;
        }
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { follow, unFollow } = friendSlice.actions;

export default friendSlice.reducer;
