import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Input,
  Collapse,
  Checkbox,
  IconButton,
  Chip,
} from "@material-tailwind/react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { Link } from "react-router-dom";
import moment from "moment";
import axios from "axios";
import { useEffect, useState } from "react";

const defaultDeppart = moment().format("DD-MM-YYYY");

const TrainForm = () => {
  // getTrain
  const [station, setStation] = useState([]);
  const [from, setFrom] = useState({});
  const [to, setTo] = useState({});
  const [deppartDate, setDeppartDate] = useState(defaultDeppart);
  const [arriveDate, setArriveDate] = useState("");
  const [msg, setMsg] = useState("")

  useEffect(() => {
    getStation();
  }, []);

  const getStation = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/station");
      setStation(response.data.station);
    } catch (error) {
      setMsg(error.response.data.msg)
    }
  };

  // collapse
  const [openFrom, setOpenFrom] = useState(false);
  const [openTo, setOpenTo] = useState(false);
  const [openPasengger, setOpenPasengger] = useState(false);
  const triggerFrom = () => setOpenFrom((cur) => !cur);
  const triggerTo = () => setOpenTo((cur) => !cur);
  const triggerPasengger = () => setOpenPasengger((cur) => !cur);

  // Pasengger Button
  const [adult, setAdult] = useState(1);
  const [infant, setInfant] = useState(0);

  // enabled Input Pulang
  const [enablePulang, setEnablePulang] = useState(true);

  // Get Tanggal
  const current = moment().format("dddd, DD MMMM YYYY");
  const deppart = moment(deppartDate).format("DD-MM-YYYY");

  const ret_date = () => {
    if (arriveDate == "") return "";
    const arrive = moment(arriveDate).format("DD-MM-YYYY");
    return arrive;
  };

  return (
    <Card className=" w-200 bg-white h-[350px] shadow-lg flex flex-col">
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          Pemesanan Tiket Kereta Api
        </Typography>
        <p>{current}</p>
      </CardBody>
      <form>
        <CardBody className="flex pt-0 pb-0 justify-center">
          <div className="w-[500px] h-[72px] mr-[10px]">
            <h1>Dari</h1>
            <Input
              type="text"
              color="blue"
              onClick={triggerFrom}
              className="w-[400px] font-bold"
              placeholder="Kota atau stasiun"
              value={from.name}
              onChange={(e) => setFrom(e.target.value)}
            />
            <Collapse open={openFrom}>
              <Card className="my-4 mx-auto w-8/ z-40 overflow-y-auto h-[350px]">
                <CardBody className="border-2 text-center">
                  <h1>Pilih Kota atau Stasiun</h1>
                </CardBody>
                <ul>
                  {station.map((data, index) => (
                    <li
                      className="w-auto h-auto px-[25px] py-[10px] flex hover:bg-blue-50"
                      onClick={() => {
                        setFrom(data);
                        triggerFrom(true);
                      }}
                    >
                      <div className="">
                        <h1 className="font-bold">{data.city}</h1>
                        <p className="capitalize">{data.name}</p>
                      </div>
                      <Chip
                        value={data.code}
                        variant="ghost"
                        className="justify-items-end ml-auto text-gray-500"
                      />
                    </li>
                  ))}
                </ul>
              </Card>
            </Collapse>
          </div>
          <div className="w-[500px] h-[72px] ">
            <h1>Ke</h1>
            <Input
              color="blue"
              onClick={triggerTo}
              className="w-[400px]"
              placeholder="Mau ke mana?"
              value={to.name}
              onChange={(e) => setTo(e.target.value)}
            />
            <Collapse open={openTo}>
              <Card className="my-4 mx-auto w-8/ z-40 overflow-y-auto h-[350px]">
                <CardBody className="border-2 text-center">
                  <h1>Pilih Kota atau Stasiun</h1>
                </CardBody>
                <ul>
                  {station.map((data, index) => (
                    <li
                      className="w-auto h-auto px-[25px] py-[10px] flex hover:bg-blue-50"
                      onClick={() => {
                        setTo(data);
                        triggerTo(true);
                      }}
                    >
                      <div className="">
                        <h1 className="font-bold">{data.city}</h1>
                        <p className="capitalize">{data.name}</p>
                      </div>
                      <Chip
                        value={data.code}
                        variant="ghost"
                        className="justify-items-end ml-auto text-gray-500"
                      />
                    </li>
                  ))}
                </ul>
              </Card>
            </Collapse>
          </div>
        </CardBody>
        <CardBody className="flex pt-0 pb-0 justify-center">
          <div className="w-[300px] h-[72px] mr-[10px]">
            <h1>Pergi</h1>
            <Input
              color="blue"
              type="date"
              className="w-[400px]"
              defaultValue={defaultDeppart}
              onChange={(e) => setDeppartDate(e.target.value)}
            />
          </div>
          <div className="w-[300px] h-[72px] mr-[10px]">
            <div className="flex h-6">
              <Checkbox
                color="blue"
                onClick={() => setEnablePulang((current) => !current)}
              />
              <h1 className="h-1">Pulang</h1>
            </div>
            <Input
              disabled={enablePulang}
              color="blue"
              type="date"
              className="w-[400px] "
              onChange={(e) => setArriveDate(e.target.value)}
            />
          </div>
          <div className="w-[300px] h-[72px] ">
            <h1>Penumpang</h1>
            <Input
              color="blue"
              onClick={triggerPasengger}
              className="w-[400px]"
              icon={<i className="fas fa-heart" />}
              readOnly
              value={adult + " Dewasa , " + infant + " Bayi"}
            />
            <Collapse open={openPasengger}>
              <Card className="my-4 mx-auto w-8/ ">
                <CardBody>
                  <Typography>Penumpang</Typography>
                </CardBody>
                <CardBody className="flex">
                  <Typography className="mr-auto">Dewasa</Typography>
                  <IconButton
                    onClick={() => setAdult(adult - 1 === -1 ? 0 : adult - 1)}
                    color="blue"
                    className="w-[30px] h-[30px]"
                  >
                    <FaMinus />
                  </IconButton>
                  <Typography className="m-auto mx-4">{adult}</Typography>
                  <IconButton
                    onClick={() => setAdult(adult + 1)}
                    color="blue"
                    className="w-[30px] h-[30px]"
                  >
                    <FaPlus />
                  </IconButton>
                </CardBody>
                <CardBody className="flex">
                  <Typography className="mr-auto">Bayi</Typography>
                  <IconButton
                    onClick={() =>
                      setInfant(infant - 1 === -1 ? 0 : infant - 1)
                    }
                    color="blue"
                    className="w-[30px] h-[30px] "
                  >
                    <FaMinus />
                  </IconButton>
                  <Typography className="m-auto mx-4">{infant}</Typography>
                  <IconButton
                    onClick={() => setInfant(infant + 1)}
                    color="blue"
                    className="w-[30px] h-[30px]"
                  >
                    <FaPlus />
                  </IconButton>
                </CardBody>
              </Card>
            </Collapse>
          </div>
        </CardBody>
        <div className="">
          <CardFooter className="p-auto grid justify-items-end">
            <Link
              to={`/search?from=${from.name}&to=${
                to.name
              }&deppart_date=${deppart}&arrive_date=${ret_date()}`}
              state={{
                idFrom: from.id,
                idTo: to.id,
                adult: adult,
                infant: infant,
              }}
            >
              <Button className="btn rounded-full text-blue-700 bg-yellow-600">
                CARI KERETA API
              </Button>
            </Link>
          </CardFooter>
        </div>
      </form>
    </Card>
  );
};

export default TrainForm;
