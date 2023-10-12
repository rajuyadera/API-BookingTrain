import {
  Card,
  Input,
  Select,
  Option,
  Checkbox,
  Typography,
  Button,
} from "@material-tailwind/react";
import moment from "moment";
import { useState } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const PasenggerData = () => {
  const { state } = useLocation();
  const price = state.price;
  const deppartDate = state.deppart_at;
  const arriveDate = state.arrive_at;
  const arriveTime = state.arrive_time;
  const deppartTime = state.deppart_time;
  const resultCurrency = price.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
  });
  const resultDeppartDate = moment(deppartDate, "YYYY-MM-DD");
  const resultArriveDate = moment(arriveDate, "YYYY-MM-DD");
  const resultDeppartTime = deppartTime.slice(0, -3);
  const resultArriveTime = arriveTime.slice(0, -3);

  const [enableInput, setEnableInput] = useState(true);

  return (
    <div className=" mx-28 mt-12  ">
      <div className="text-4xl mb-2">
        <h1>Pemesanan</h1>
      </div>
      <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-3 gap-10 ">
        <div className="col-span-2">
          <Card className="border-2 border-blue-700 p-5 mb-5">
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
          <Card className="border-2 border-blue-700 p-5">
            <h1 className="font-bold text-xl ">Data Penumpang</h1>
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
              </div>

              {/* kanan */}
              <div className="columns-md col-span-2 ml-4">
                <div className="pb-4">
                  <label htmlFor="">Nama Penumpang</label>
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
              </div>
            </div>
          </Card>

          <div className="mt-14">
            <h1 className="font-bold text-red-600">
              Ketentuan Reservasi Tiket Kereta Api
            </h1>
            <Card className="border-2 border-blue-700 p-5">
              <p className="text-sm">
                1. Reservasi dapat dilakukan 3 jam sebelum kereta berangkat.
              </p>
              <p className="text-sm">
                2. Harga dan ketersediaan tempat duduk sewaktu-waktu dapat
                berubah.
              </p>
              <p className="text-sm">
                3. Pastikan anda telah menerima email konfirmasi pembayaran dari
                PT. Kereta Api Indonesia (Persero) untuk ditukarkan dengan
                boarding pass di stasiun online.
              </p>
            </Card>
          </div>
          <div className="my-5">
            <Checkbox
              color="blue"
              onClick={() => setEnableInput((open) => !open)}
              label={
                <Typography color="blue-gray" className="flex font-medium">
                  I agree with the
                  <Typography
                    as="a"
                    href="#"
                    color="blue"
                    className="font-medium transition-colors hover:text-blue-700"
                  >
                    &nbsp;terms and conditions
                  </Typography>
                  .
                </Typography>
              }
            />
          </div>
          <div className="">
            <Button variant="gradient" color="blue" disabled={enableInput}>
              <span>Confirm</span>
            </Button>
          </div>
        </div>
        <div className="">
          <Card className="border-2 border-blue-700 m-auto">
            <div className="flex flex-col">
              <div className="bg-blue-600 p-5 text-center text-white text-2xl ">
                Total {resultCurrency}.-
              </div>
              <div className="p-5">
                <div className="">Rabu, 10 Oktober 2023</div>
                <div className="font-semibold text-xl">{state.train}</div>
                <div className="font-semibold">{state.className}</div>
                <div className="">
                  {state.adult} Dewasa - {state.infant} Infant
                </div>
                <div className="mt-11  ">
                  <div className="flex">
                    <div className=" pr-4">
                      <div className="">{state.from}</div>
                      <div className="">{resultDeppartTime}</div>
                      <div className="">
                        {resultDeppartDate.format("DD MMMM YYYY")}
                      </div>
                    </div>
                    <div className="px-4">
                      <FaArrowRight size={20} />
                    </div>
                    <div className="pl-4">
                      <div className="">{state.to}</div>
                      <div className="">{resultArriveTime}</div>
                      <div className="">
                        {resultArriveDate.format("DD MMMM YYYY")}
                      </div>
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
