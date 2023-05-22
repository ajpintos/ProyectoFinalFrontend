import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { allUsers } from "../../../Redux/actions/actionsUser";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import ModificarUser from "../ModificarUsers/ModificarUser";
import NuevoForm from "../New user admi/RegisterPage/RegisterPage";
import axios from "axios";

const UsersSettings = () => {
  const dispatch = useDispatch();

  const loadingData = () => {
    dispatch(allUsers());
  };

  useEffect(() => {
    loadingData();
  }, []);

  const users = useSelector((state) => state.users);

  const [show, setShow] = useState(false);

  const [email, setEmail] = useState("");

  const handleClose = () => setShow(false);

  const handleShow = (email) => {
    setShow(true);
    setEmail(email);
  };

  const borradoLogico = async (email, status) => {
    const form = {
      email: email,
      status: !status,
    };
    try {
      const borrado = await axios.delete("/users/delete", { data: form });
      if (borrado) alert("Successful operation");
      loadingData()
    } catch (error) {
      alert("Error found: " + error.message);
    }
  };

  const [estado, setEstado] = useState(false);
  const handleModal = () => {
    estado ? setEstado(false) : setEstado(true);
  };

  return (
    <>
      <div className="container-fluid col-8 mt-3">
        <br />
        <h4>User Settings</h4>

        <Button
          style={{ borderRadius: "2rem", fontSize: "15px" }}
          onClick={handleModal}
          variant="success"
        >
          New
        </Button>
        <Table striped size="sm">
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>@Mail</th>
              <th>Modify</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((prod, index) => {
              return (
                <tr key={index}>
                  <td key={index}>{index + 1}</td>
                  <td>{prod?.firstname}</td>
                  <td>{prod?.email}</td>
                  <td>
                    <Button
                      variant="light"
                      size="sm"
                      onClick={() => handleShow(prod?.email)}
                    >
                      📝
                    </Button>
                  </td>
                  <td>
                    <Button
                      variant="light"
                      size="sm"
                      onClick={() =>
                        borradoLogico(prod.email, prod.customerStatus)
                      }
                    >
                      {prod.customerStatus ? "✅ " : "❌"}
                    </Button>
                  </td>
                </tr>
                //❎
              );
            })}
          </tbody>
          <ModificarUser show={show} handleClose={handleClose} email={email} />
        </Table>
        {estado ? <NuevoForm /> : null}
      </div>
    </>
  );
};

export default UsersSettings;
