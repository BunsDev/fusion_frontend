import WalletProvider from "@/provider/WalletProvider";

import QRcodeModal from "@/components/modal/QRcodeModal";

import QR from "@/components/ui/QR";
import Gas from "@/components/ui/Gas";
import Menu from "@/components/ui/Menu";

import ChainSelector from "@/components/ui/ChainSelector";

const mainLayout = ({ children }) => {
  return (
    <>
      <QRcodeModal />

      <WalletProvider>
        <main className="bg-gray-200 relative flex min-h-screen flex-col items-center px-2 py-10">
          <ChainSelector />

          <div className="flex flex-col max-w-[29rem] w-full space-y-4">
            <div className="flex justify-between items-center mt-16">
              <h1 className="text-3xl font-medium ">Fusion</h1>

              <div className="flex space-x-2">
                <Gas />
                <QR />
                <Menu />
              </div>
            </div>

            {children}
          </div>
        </main>
      </WalletProvider>
    </>
  );
};

export default mainLayout;
