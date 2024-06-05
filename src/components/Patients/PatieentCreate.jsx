import React from "react";
import { useForm } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.min.css";

function PatientCreate() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="row">
      <div className="col">
        <div className="card">
          <div className="card-header">
            Crear Paciente
          </div>
          <div className="card-body">
            <div className="container mt-5">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="firstName" className="form-label">
                      Nombre
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      {...register("firstName", {
                        required: "Este campo es requerido",
                      })}
                    />
                    {errors.firstName && (
                      <p className="text-danger">{errors.firstName.message}</p>
                    )}
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="lastName" className="form-label">
                      Apellido
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      {...register("lastName", {
                        required: "Este campo es requerido",
                      })}
                    />
                    {errors.lastName && (
                      <p className="text-danger">{errors.lastName.message}</p>
                    )}
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="dob" className="form-label">
                      Fecha de nacimiento
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="dob"
                      {...register("dob", {
                        required: "Este campo es requerido",
                      })}
                    />
                    {errors.dob && (
                      <p className="text-danger">{errors.dob.message}</p>
                    )}
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="dni" className="form-label">
                      DNI
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="dni"
                      {...register("dni", {
                        required: "Este campo es requerido",
                      })}
                    />
                    {errors.dni && (
                      <p className="text-danger">{errors.dni.message}</p>
                    )}
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="fatherName" className="form-label">
                      Nombre del padre
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="fatherName"
                      {...register("fatherName", {
                        required: "Este campo es requerido",
                      })}
                    />
                    {errors.fatherName && (
                      <p className="text-danger">{errors.fatherName.message}</p>
                    )}
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="motherName" className="form-label">
                      Nombre de la madre
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="motherName"
                      {...register("motherName", {
                        required: "Este campo es requerido",
                      })}
                    />
                    {errors.motherName && (
                      <p className="text-danger">{errors.motherName.message}</p>
                    )}
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="healthInsurance" className="form-label">
                      Obra social
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="healthInsurance"
                      {...register("healthInsurance", {
                        required: "Este campo es requerido",
                      })}
                    />
                    {errors.healthInsurance && (
                      <p className="text-danger">
                        {errors.healthInsurance.message}
                      </p>
                    )}
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="gender" className="form-label">
                      Sexo
                    </label>
                    <select
                      className="form-control"
                      id="gender"
                      {...register("gender", {
                        required: "Este campo es requerido",
                      })}
                    >
                      <option value="">Seleccione...</option>
                      <option value="male">Masculino</option>
                      <option value="female">Femenino</option>
                      <option value="other">Otro</option>
                    </select>
                    {errors.gender && (
                      <p className="text-danger">{errors.gender.message}</p>
                    )}
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="motherEmail" className="form-label">
                      Correo de la madre
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="motherEmail"
                      {...register("motherEmail")}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="fatherEmail" className="form-label">
                      Correo del padre
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="fatherEmail"
                      {...register("fatherEmail")}
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="address" className="form-label">
                      Dirección
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="address"
                      {...register("address", {
                        required: "Este campo es requerido",
                      })}
                    />
                    {errors.address && (
                      <p className="text-danger">{errors.address.message}</p>
                    )}
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="school" className="form-label">
                      Escuela
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="school"
                      {...register("school", {
                        required: "Este campo es requerido",
                      })}
                    />
                    {errors.school && (
                      <p className="text-danger">{errors.school.message}</p>
                    )}
                  </div>
                </div>

                <button type="submit" className="btn btn-primary">
                  Guardar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientCreate;
