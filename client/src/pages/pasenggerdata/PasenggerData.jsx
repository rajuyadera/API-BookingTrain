import { Card, Input, Select, Option } from "@material-tailwind/react";
import { BsFillPersonFill } from "react-icons/bs";
import { useLocation } from "react-router-dom";

const PasenggerData = () => {
  const { state } = useLocation();
  return (
    <div className=" mx-28 mt-12  ">
      <div className="text-4xl mb-2">
        <h1>Pemesanan</h1>
      </div>
      <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-3 gap-10 ">
        <div className="col-span-2">
          <Card className="border-2 border-blue-700 p-5">
            <h1 className="font-bold text-xl ">Data Pemesan</h1>
            <div className="flex flex-auto py-4">
              {/* Kiri */}
              <div className="mr-4 ">
                <div className="pb-4">
                  <label htmlFor="">Tittle</label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                      <BsFillPersonFill />
                    </span>
                    <Select
                      placeholder="Email Address"
                      className="!border !border-gray-300 bg-white text-gray-900 ring-4 ring-transparent"
                      labelProps={{
                        className: "hidden",
                      }}
                    >
                      <Option>Tuan</Option>
                      <Option>Nyonya</Option>
                    </Select>
                  </div>
                </div>
                <div className="pb-4">
                  <label htmlFor="">Tipe identitas</label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                      <BsFillPersonFill />
                    </span>
                    <Select
                      placeholder="Email Address"
                      className="!border !border-gray-300 bg-white text-gray-900 ring-4 ring-transparent"
                      labelProps={{
                        className: "hidden",
                      }}
                    >
                      <Option>NIK</Option>
                      <Option>PASPOR</Option>
                    </Select>
                  </div>
                </div>
                <div className="pb-4">
                  <label htmlFor="">No HP.</label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                      <BsFillPersonFill />
                    </span>
                    <Input
                      type="text"
                      placeholder="08xxxxx"
                      className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                      labelProps={{
                        className: "hidden",
                      }}
                      containerProps={{ className: "min-w-[100px]" }}
                    />
                  </div>
                </div>
                <div className="">
                  <label htmlFor="">Alamat</label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                      <BsFillPersonFill />
                    </span>
                    <Input
                      type="text"
                      placeholder="Nama Daerah"
                      className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                      labelProps={{
                        className: "hidden",
                      }}
                      containerProps={{ className: "min-w-[100px]" }}
                    />
                  </div>
                </div>
              </div>

              {/* kanan */}
              <div className="columns-md col-span-2 ml-4">
                <div className="pb-4">
                  <label htmlFor="">Nama Pemesan</label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                      <BsFillPersonFill />
                    </span>
                    <Input
                      type="text"
                      placeholder="Nama sesuai NIK / Paspor"
                      className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                      labelProps={{
                        className: "hidden",
                      }}
                      containerProps={{ className: "min-w-[100px]" }}
                    />
                  </div>
                </div>
                <div className="pb-4">
                  <label htmlFor="">Nomor Identitas</label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                      <BsFillPersonFill />
                    </span>
                    <Input
                      type="text"
                      placeholder="No Identitas sesuaiNIK / Paspor"
                      className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                      labelProps={{
                        className: "hidden",
                      }}
                      containerProps={{ className: "min-w-[100px]" }}
                    />
                  </div>
                </div>
                <div className="">
                  <label htmlFor="">Email</label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                      <BsFillPersonFill />
                    </span>
                    <Input
                      type="email"
                      placeholder="me@contoh.com"
                      className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                      labelProps={{
                        className: "hidden",
                      }}
                      containerProps={{ className: "min-w-[100px]" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </Card>
          <Card className="border-2 border-blue-700 mt-3">
            <h1>data penumpang</h1>
          </Card>
        </div>
        <div className="">
          <Card className="border-2 border-blue-700 m-auto">
            <div className="flex flex-col">
              <div className="bg-blue-600 p-5 text-center text-white text-2xl ">Total Rp {state.price}.-</div>
              <div className="p-5">
                <div className="">Rabu, 10 Oktober 2023</div>
                <div className="font-semibold text-xl"></div>
                <div className="font-semibold">Ekonomi</div>
                <div className="">1 Dewasa - 1 Infant</div>
                <div className="mt-11  ">
                  <div className="flex">
                    <div className=" pr-4">
                      <div className="">PASARSENEN</div>
                      <div className="">17:00</div>
                      <div className="">11 Okt 2023</div>
                    </div>
                    <div className="px-4">===</div>
                    <div className="pl-4">
                      <div className="">PASARSENEN</div>
                      <div className="">17:00</div>
                      <div className="">11 Okt 2023</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PasenggerData;
