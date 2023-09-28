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
} from "@material-tailwind/react";
import { useState } from "react";

const TrainForm = () => {
  const [openFrom, setOpenFrom] = useState(false);
  const [openTo, setOpenTo] = useState(false);
  const [openPasengger, setOpenPasengger] = useState(false);
  const triggerFrom = () => setOpenFrom((cur) => !cur);
  const triggerTo = () => setOpenTo((cur) => !cur);
  const triggerPasengger = () => setOpenPasengger((cur) => !cur);

  return (
    <Card className=" w-200 bg-white mb-[80px] h-[350px] shadow-lg flex flex-col">
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            Pemesanan Tiket Kereta Api
          </Typography>
          <p>Kamis 23, september 2023</p>
        </CardBody>
        <CardBody className="flex pt-0 pb-0 justify-center">
          <div className="w-[500px] h-[72px] mr-[10px]">
            <h1>Dari</h1>
            <Input
              color="blue"
              onClick={triggerFrom}
              className="w-[400px]"
              icon={<i className="fas fa-heart" />}
            />
            <Collapse open={openFrom}>
              <Card className="my-4 mx-auto w-8/ z-40 overflow-y-auto h-[350px]">
                <CardBody>
                  <Typography>Penumpang</Typography>
                </CardBody>
                <CardBody>
                  <Typography>Penumpang</Typography>
                </CardBody>
                <CardBody>
                  <Typography>Penumpang</Typography>
                </CardBody>
                <CardBody>
                  <Typography>Penumpang</Typography>
                </CardBody>
                <CardBody>
                  <Typography>Penumpang</Typography>
                </CardBody>
                <CardBody>
                  <Typography>Penumpang</Typography>
                </CardBody>
              </Card>
            </Collapse>
          </div>
          <div className="w-[500px] h-[72px] ">
            <h1>Ke</h1>
            <Input
              color="blue"
              onClick={triggerTo}
              className="w-[400px]"
              icon={<i className="fas fa-heart" />}
            />
            <Collapse open={openTo}>
              <Card className="my-4 mx-auto w-8/ z-40 overflow-y-auto h-[350px]">
                <CardBody>
                  <Typography>Penumpang</Typography>
                </CardBody>
                <CardBody>
                  <Typography>Penumpang</Typography>
                </CardBody>
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
              className="w-[400px] "
              icon={<i className="fas fa-heart" />}
            />
          </div>
          <div className="w-[300px] h-[72px] mr-[10px]">
            <div className="flex h-6">
              <Checkbox color="blue" />
              <h1 className="h-1">Pulang</h1>
            </div>
            <Input
              disabled
              color="blue"
              type="date"
              className="w-[400px] "
              icon={<i className="fas fa-heart" />}
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
            />
            <Collapse open={openPasengger}>
              <Card className="my-4 mx-auto w-8/ ">
                <CardBody>
                  <Typography>Penumpang</Typography>
                </CardBody>
                <CardBody className="flex">
                  <Typography className="mr-[50px]">Dewasa</Typography>
                  <IconButton color="blue" className="w-[30px] h-[30px] ">
                    <i className="fas fa-heart " />
                  </IconButton>
                  <Typography className="m-auto">0</Typography>
                  <IconButton color="blue" className="w-[30px] h-[30px]">
                    <i className="fas fa-heart " />
                  </IconButton>
                </CardBody>
                <CardBody className="flex">
                  <Typography className="mr-[75px]">Bayi</Typography>
                  <IconButton color="blue" className="w-[30px] h-[30px] ">
                    <i className="fas fa-heart " />
                  </IconButton>
                  <Typography className="m-auto">0</Typography>
                  <IconButton color="blue" className="w-[30px] h-[30px]">
                    <i className="fas fa-heart " />
                  </IconButton>
                </CardBody>
              </Card>
            </Collapse>
          </div>
        </CardBody>
      <div className="">
        <CardFooter className="p-auto grid justify-items-end">
          <Button className="rounded-full text-blue-700 bg-yellow-600">CARI KERETA API</Button>
        </CardFooter>
      </div>
    </Card>
  );
};

export default TrainForm;
