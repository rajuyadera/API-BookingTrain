import {
  Button,
  Card,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { Link, useLocation, useSearchParams } from "react-router-dom";

const Search = () => {
  const [searchParams] = useSearchParams();
  const { state } = useLocation();

  const from = state.idFrom;
  const to = state.idTo;
  const deppartDate = searchParams.get("deppart_date");

  const [rute, setRute] = useState([]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  useEffect(() => {
    getRute();
  }, []);

  const getRute = async (e) => {
    const response = await axios.get(
      `http://localhost:4000/api/searchrute?from=${from}&to=${to}&deppart_at=${deppartDate}`
    );
    setRute(response.data.rute);
    console.log(rute);
  };

  const mappingRute = () => {
    if (rute.length > 0) {
      return rute.map((data, index) => {

        const startTime = moment.duration(data.deppart_time)
        const endTime = moment.duration(data.arrive_time)
        const hrs = endTime.subtract(startTime).hours()
        const min = startTime.subtract(endTime).minutes()
        const result = hrs + " jam" + " " + min + " menit"

        const price = data.price
        const resultCurrency = price.toLocaleString('id-ID', {style: 'currency', currency: 'IDR' }) 

        const date = data.deppart_at
        const finalDate = moment(date, "YYYY-MM-DD")


        return (
          <div className="">
            <Card
              className=" bg-blue-800 h-[150px] shadow-lg p-5 grid grid-cols-5 gap-4  place-items-center text-white mt-2 hover:bg-white hover:text-blue-800 hover:border-2 hover:border-blue-800 hover:cursor-pointer "
              key={index.id}
            >
              <div className="">
                <div className="text-xl font-bold ">
                  {data.train.name}
                  <span className=" pl-1">(320)</span>
                </div>
                <div className="">{data.train.class.className}</div>
              </div>
              <div className="text-center">
                <div className="">{data.from.name}</div>
                <div className="font-bold">{data.deppart_time}</div>
                <div className="">{finalDate.format('DD MMMM YYYY')}</div>
              </div>
              <div className="items-center">
                <div className="">
                  <BsFillArrowRightCircleFill size={25} />
                </div>
                <div className="">{result}</div>
              </div>
              <div className="text-center">
                <div className="">{data.to.name}</div>
                <div className="font-bold">{data.arrive_time}</div>
                <div className="">{finalDate.format('DD MMMM YYYY')}</div>
              </div>
              <div className="text-center">
                <div className="font-bold">{resultCurrency}</div>
                <div className="my-2 ">
                  <Button
                    className="btn w-full text-white bg-yellow-800"
                    size="sm"
                    onClick={handleOpen}
                  >
                    PESAN
                  </Button>
                </div>
                <div className="">Tersedia</div>
              </div>
            </Card>
            <Dialog open={open} handler={handleOpen}>
              <DialogHeader>
                <div className=""> {data.from.name}</div>
                <div className="mx-3">
                  <BsFillArrowRightCircleFill />
                </div>
                <div className=""> {data.to.name}</div>
              </DialogHeader>
              <DialogBody divider>
                <div className="">Kereta : {data.train.name}</div>
                <div className="">Tanggal berangkat : {data.deppart_at}</div>
                <div className="">Waktu Berangkat : {data.deppart_time}</div>
                <div className="">Waktu Tiba : {data.arrive_time}</div>
                <div className="">
                  Pemesan : {state.adult} Dewasa - {state.infant} Bayi{" "}
                </div>
                <div className="">Harga : {data.price * state.adult}</div>
                Apakah anda yakin ingin memesan tiket ini?
              </DialogBody>
              <DialogFooter>
                <Button
                  variant="text"
                  color="red"
                  onClick={handleOpen}
                  className="mr-1"
                >
                  <span>Cancel</span>
                </Button>
                <Link
                to={'/pasenggerdata'}
                state= {{
                  adult: state.adult,
                  infant: state.infant,
                  from: data.from.name,
                  to: data.to.name,
                  train: data.train.name,
                  className: data.train.class.className,
                  deppart_at: data.deppart_at,
                  arrive_at: data.arrive_at,
                  deppart_time: data.deppart_time,
                  arrive_time: data.arrive_time,
                  price: data.price
                }}
                >
                <Button variant="gradient" color="green" onClick={handleOpen}>
                  <span>Confirm</span>
                </Button>
                </Link>
              </DialogFooter>
            </Dialog>
          </div>
        );
      });
    } else {
      return (
        <Card className=" bg-gray-500 shadow-lg grid justify-items-center gap-4 grid-rows-2 mt-2 ">
          <div className="">
            <img src="https://www.tiket.com/kereta-api/assets/2ff8e87a.svg" />
          </div>
          <div className="text-center text-black  h-48  ">
            <div className="text-lg font-medium   ">
              Kereta ini belum tersedia
            </div>
            <div className="mt-3 font-extralight">
              Ubah pencarian dengan asal dan tujuan atau tanggal yang berbeda
            </div>
            <div className=""></div>
          </div>
        </Card>
      );
    }
  };

  return (
    <div className="px-[100px]">
      <div className="" id="preview-train">
        <Card className=" bg-blue-800 text-white h-[60px] shadow-lg flex flex-col p-5">
          <div className="grid grid-cols-5 gap-4 justify-items-center  ">
            <div className="">Kereta</div>
            <div className="">Berangkat</div>
            <div className="">Durasi</div>
            <div className="">Tiba</div>
            <div className="">Harga</div>
          </div>
        </Card>
      </div>
      <div className="mt-10">{mappingRute()}</div>
      <div className=""></div>
    </div>
  );
};

export default Search;
