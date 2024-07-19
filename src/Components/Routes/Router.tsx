import { HashRouter, Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { NotFoundPage } from '../Not-Found-Page/Not-Found-Page';
import App from '../../App';
import store from '../Redux/Store/store';
import { Theme } from '../Redux/Slices/themeMode';
import WorkoutPlans from '../Workout-plans/WorkoutPlans';
import { LedWorkout } from '../Workout-plans/LedWorkout';
import { Instructors } from '../Instructors/Instructors';
import { Prices } from '../Prices/Prices';
import { InfoInstructors } from '../Info-instructors/InfoInstructors';
import { Timetable } from '../Timetable/Timetable';
import { WorkoutInfo } from '../Workout-Info/WorkoutInfo';
import Contacts from '../Contacts/Contacts';
import RefundPolicy from '../Policy/Refund';
import TermsOfService from '../Policy/Term-Of-Service';
import PrivacyPolicy from '../Policy/Privacy-Policy';
import UserPage from '../User-Page/UserPage';
import ProtectedRoute from '../ProtectedRout/Protected';
import {
  ledWorkoutsTable,
  timetable,
} from '../Timetable/Helpers/timetableData';

export const Root: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  return (
    <Provider store={store}>
      <HashRouter>
        <Routes>
          <Route
            path="/"
            element={
              <App
                themeColor={Theme.light}
                isModalVisible={isModalVisible}
                setIsModalVisible={setIsModalVisible}
              />
            }
          />

          <Route
            path="/timetable/group-workout"
            element={
              <Timetable
                timetableDate={timetable}
                themeColor={Theme.dark}
                workoutName={'Group Workout'}
                isLedWorkout={true}
              />
            }
          />
          <Route
            path="timetable/trainer-led-workout"
            element={
              <Timetable
                timetableDate={ledWorkoutsTable}
                themeColor={Theme.dark}
                workoutName={'Trainer-Led Workout'}
                isLedWorkout={false}
              />
            }
          />
          <Route
            path="workout/group-workout"
            element={
              <WorkoutPlans
                themeColor={Theme.dark}
                workoutName={'Group Workout'}
              />
            }
          />

          <Route
            path="workout/trainer-led-workout"
            element={
              <LedWorkout
                themeColor={Theme.dark}
                isLedWorkout={true}
                workoutName={'Trainer-Led Workout'}
              />
            }
          />
          <Route
            path="workout/self-guided-workout"
            element={
              <LedWorkout
                themeColor={Theme.dark}
                isLedWorkout={false}
                workoutName={'Self-Guided Workout'}
              />
            }
          />
          <Route
            path="workout/group-workout/:id"
            element={<WorkoutInfo themeColor={Theme.dark} />}
          />

          <Route
            path="trainers/"
            element={<Instructors themeColor={Theme.dark} />}
          />
          <Route
            path="trainers/:id"
            element={<InfoInstructors themeColor={Theme.dark} />}
          />

          <Route path="/prices" element={<Prices themeColor={Theme.dark} />} />

          <Route
            path="/contacts"
            element={<Contacts themeColor={Theme.dark} />}
          />

          <Route
            path="refund-policy"
            element={<RefundPolicy themeColor={Theme.dark} />}
          />

          <Route
            path="terms-of-service"
            element={<TermsOfService themeColor={Theme.dark} />}
          />

          <Route
            path="privacy-policy"
            element={<PrivacyPolicy themeColor={Theme.dark} />}
          />

          <Route element={<ProtectedRoute />}>
            <Route
              path="/profile"
              element={
                <UserPage
                  themeColor={Theme.light}
                  isMyWorkout={false}
                  isMembership={false}
                  isUserInfo={false}
                />
              }
            />
          </Route>

          <Route element={<ProtectedRoute />}>
            <Route
              path="/profile/:id"
              element={
                <UserPage
                  themeColor={Theme.light}
                  isMyWorkout={false}
                  isMembership={false}
                  isUserInfo={false}
                />
              }
            />
          </Route>

          {/* <Route
            path="/profile/user-info"
            element={
              <UserPage
                themeColor={Theme.light}
                isMyWorkout={false}
                isMembership={false}
                isUserInfo={true}
              />
            }
          /> */}

          {/* <Route
            path="/profile/membership"
            element={
              <UserPage
                themeColor={Theme.light}
                isMyWorkout={false}
                isMembership={true}
                isUserInfo={false}
              />
            }
          /> */}

          {/* <Route
            path="/profile/my-workout"
            element={
              <UserPage
                themeColor={Theme.light}
                isMyWorkout={true}
                isMembership={false}
                isUserInfo={false}
              />
            }
          /> */}

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </HashRouter>
    </Provider>
  );
};
