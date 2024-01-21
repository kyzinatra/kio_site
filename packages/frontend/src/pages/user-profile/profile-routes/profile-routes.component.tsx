import { Route, Routes } from "react-router-dom";
import { ProfileCommon } from "../profile-content/profile-common/profile-common.component";
import { ProfilePayment } from "../profile-content/profile-payment/profile-payment.component";
import { ProfileSocialMedia } from "../profile-content/profile-social-media/profile-social-media.component";
import { ProfileTasks } from "../profile-content/profile-tasks/profile-tasks.component";
import { ProfileConstructors } from "../profile-content/profile-constructors/profile-constructors.component";
import { ProfileNotificationsIntegrations } from "../profile-content/profile-notifications-integrations/profile-notifications-integrations.component";

export const ProfileRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="" element={<ProfileCommon/>}/>
            <Route path="socialMedia" element={<ProfileSocialMedia/>}/>
            <Route path="payment" element={<ProfilePayment/>}/>
            <Route path="tasks" element={<ProfileTasks/>}/>
            <Route path="constructors" element={<ProfileConstructors/>}/>
            <Route path="notificationsAndIntegrations" element={<ProfileNotificationsIntegrations/>}/>
        </Routes>
    </div>
  );
};
