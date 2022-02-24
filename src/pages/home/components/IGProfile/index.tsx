import IGUser from "components/IGUser";
import { useAppSelector } from "../../../../hooks";

const IGProfile: React.FC = () => {
  const friendReducer = useAppSelector((state) => state.friendReducer);
  const friends = friendReducer.friends.slice(0, 4);

  return (
    <div className="mt-8 ml-8 shadow-lg box-border p-2">
      <IGUser
        account="bruce_fe"
        location="布魯斯前端"
        avatar="/images/avatar.png"
        size="medium"
      />
      <p className="font-bold text-gray-400 mt-4 mx-4 mb-3 text-sm">
        You are following
      </p>
      {friends.map((item) => {
        const { id, account, avatar, isFollowing, location } = item;
        return (
          <div className="-mt-3">
            <IGUser
              key={id}
              id={id}
              account={account}
              avatar={avatar}
              location={location}
              isFollowing={isFollowing}
              showFollow
            />
          </div>
        );
      })}

      {/* <div className="-mt-3">
        <IGUser showFollow />
      </div>
      <div className="-mt-3">
        <IGUser showFollow />
      </div>
      <div className="-mt-3">
        <IGUser showFollow />
      </div> */}
    </div>
  );
};

export default IGProfile;
