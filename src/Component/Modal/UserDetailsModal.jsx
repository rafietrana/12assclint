import {
  Dialog,
  Transition,
  TransitionChild,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import { Fragment } from "react";
const UserDetailsModal = ({ isOpens, closeModals, userId }) => {
  // // $&

  const { data: singleuserdata = [] } = useQuery({
    queryKey: ["singleuserdata"],
    queryFn: () =>
      axios(`https://my-ass-12-server.vercel.app/getsingleuser/${userId}`).then(
        (res) => {
          return res?.data;
        }
      ),
  });

  // // $&
  return (
    <Transition appear show={isOpens} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModals}>
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <DialogTitle
                  onClose={closeModals}
                  as="h3"
                  className="text-lg font-medium text-center leading-6 text-gray-900"
                >
                  Review Info Before Reserve
                </DialogTitle>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Name: {singleuserdata?.name}
                  </p>
                </div>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Email: {singleuserdata?.email}
                  </p>
                </div>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    bloodGroup: {singleuserdata?.bloodGroup}
                  </p>
                </div>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    district: {singleuserdata?.district}
                  </p>
                </div>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    upozilla: {singleuserdata?.upozilla}
                  </p>
                </div>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    userStatus: {singleuserdata?.userStatus}
                  </p>
                </div>

                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    password: {singleuserdata?.password}
                  </p>
                </div>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    image Url: {singleuserdata?.image}
                  </p>
                </div>

                {/* checkout form */}
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default UserDetailsModal;
