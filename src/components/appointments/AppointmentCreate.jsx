import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import FormGroup from "@mui/material/FormGroup";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { renderTimeViewClock } from "@mui/x-date-pickers/timeViewRenderers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

function AppointmentCreate() {
  const patients = [
    { id: 1, name: "Julian Gonzales" },
    { id: 2, name: "Jonatan Perez" },
    { id: 3, name: "Carolina Brieff" },
  ];

  const daysOfWeek = [
    { label: "Lunes", value: "monday" },
    { label: "Martes", value: "tuesday" },
    { label: "Miércoles", value: "wednesday" },
    { label: "Jueves", value: "thursday" },
    { label: "Viernes", value: "friday" },
    { label: "Sábado", value: "saturday" },
    { label: "Domingo", value: "sunday" },
  ];

  const currentDate= new Date().setHours(12)

  const appointments = [
    {
      id: 1,
      date: new Date(2024, 4, 18),
    },
    {
      id: 2,
      date: new Date(2024, 4, 13),
    },
    {
      id: 3,
      date: new Date(2024, 4, 8),
    },
    {
      id: 4,
      date: new Date(2024, 4, 28),
    },
  ];

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = (data) => console.log(data);
  const isRecurrent = watch("isRecurrent");
  const recurrenceType = watch("recurrenceType");
  const allDays = watch("allDays", false);

  return (
    <>
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-header">
              <span>Crear Turno</span>
            </div>
            <div className="card-body">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Box>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <TextField
                          label="Asunto"
                          variant="outlined"
                          fullWidth
                          margin="normal"
                          {...register("subject", {
                            required: "Este campo es requerido",
                          })}
                          error={!!errors.subject}
                          helperText={errors.subject?.message}
                        />
                      </Grid>

                      <Grid item xs={12} sm={4}>
                        <Controller
                          name="startDate"
                          control={control}
                          render={({ field }) => (
                            <TextField
                              {...field}
                              label="Fecha de inicio"
                              variant="outlined"
                              fullWidth
                              margin="normal"
                              type="date"
                              InputLabelProps={{ shrink: true }}
                             
                              {...register("startDate", {
                                required: "Este campo es requerido",
                              })}
                              error={!!errors.startDate}
                              helperText={errors.startDate?.message}
                            />
                          )}
                        />
                      </Grid>

                      <Grid item xs={12} sm={4}>
                        <FormControl
                          fullWidth
                          variant="outlined"
                          margin="normal"
                          error={!!errors.startTime}
                        >
                          <Controller
                            name="startTime"
                            control={control}
                            rules={{ required: "Este campo es requerido" }}
                            render={({ field }) => (
                              <TimePicker
                                label="Hora de inicio"
                                {...field}

                                viewRenderers={{
                                  hours: renderTimeViewClock,
                                  minutes: renderTimeViewClock,
                                }}
                                renderInput={{
                                  textField: (params) => (
                                    <TextField
                                      {...params}
                                      error={!!errors.startTime}
                                      helperText={errors.startTime?.message}
                                    />
                                  ),
                                }}
                              />
                            )}
                          />
                          <FormHelperText>
                            {errors.startTime?.message}
                          </FormHelperText>
                        </FormControl>
                      </Grid>

                      <Grid item xs={12} sm={4}>
                        <FormControl
                          fullWidth
                          variant="outlined"
                          margin="normal"
                          error={!!errors.endTime}
                        >
                          <Controller
                            name="endTime"
                            control={control}
                            defaultValue={null}
                            rules={{ required: "Este campo es requerido" }}
                            render={({ field }) => (
                              <TimePicker
                                label="Hora de Fin"
                                {...field}
                                viewRenderers={{
                                  hours: renderTimeViewClock,
                                  minutes: renderTimeViewClock,
                                  seconds: renderTimeViewClock,
                                }}
                                renderInput={{
                                  textField: (params) => (
                                    <TextField
                                      {...params}
                                      error={!!errors.endTime}
                                      helperText={errors.endTime?.message}
                                    />
                                  ),
                                }}
                              />
                            )}
                          />
                          <FormHelperText>
                            {errors.endTime?.message}
                          </FormHelperText>
                        </FormControl>
                      </Grid>

                      <Grid item xs={12}>
                        <FormControl
                          fullWidth
                          variant="outlined"
                          margin="normal"
                          error={!!errors.personType}
                        >
                          <InputLabel>Tipo de persona</InputLabel>
                          <Controller
                            name="personType"
                            control={control}
                            defaultValue=""
                            rules={{ required: "Este campo es requerido" }}
                            render={({ field }) => (
                              <Select {...field} label="Tipo de persona">
                                <MenuItem value="Paciente">Paciente</MenuItem>
                                <MenuItem value="Persona">Persona</MenuItem>
                              </Select>
                            )}
                          />
                          <FormHelperText>
                            {errors.personType?.message}
                          </FormHelperText>
                        </FormControl>
                      </Grid>

                      {watch("personType") === "Paciente" && (
                        <Grid item xs={12}>
                          <FormControl
                            fullWidth
                            variant="outlined"
                            margin="normal"
                            error={!!errors.patient}
                          >
                            <InputLabel>Paciente</InputLabel>
                            <Controller
                              name="patient"
                              control={control}
                              defaultValue=""
                              rules={{
                                required: "Este campo es requerido",
                              }}
                              render={({ field }) => (
                                <Select {...field} label="Paciente">
                                  {patients.map((patient) => (
                                    <MenuItem
                                      key={patient.id}
                                      value={patient.name}
                                    >
                                      {patient.name}
                                    </MenuItem>
                                  ))}
                                </Select>
                              )}
                            />
                            <FormHelperText>
                              {errors.patient?.message}
                            </FormHelperText>
                          </FormControl>
                        </Grid>
                      )}

                      {watch("personType") === "Persona" && (
                        <Grid item xs={12}>
                          <TextField
                            label="Nombre y apellido"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            {...register("personName", {
                              required: "Este campo es requerido",
                            })}
                            error={!!errors.personName}
                            helperText={errors.personName?.message}
                          />
                        </Grid>
                      )}

                      <Grid item xs={12}>
                        <TextField
                          label="Descripción"
                          variant="outlined"
                          fullWidth
                          margin="normal"
                          multiline
                          rows={4}
                          {...register("description", {
                            required: "Este campo es requerido",
                          })}
                          error={!!errors.description}
                          helperText={errors.description?.message}
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <FormControlLabel
                          control={<Checkbox {...register("isRecurrent")} />}
                          label="Recurrente"
                        />
                      </Grid>

                      {isRecurrent && (
                        <>
                          <Grid item xs={12}>
                            <FormControl
                              fullWidth
                              variant="outlined"
                              margin="normal"
                              error={!!errors.recurrenceType}
                            >
                              <InputLabel>Recurrente por</InputLabel>
                              <Controller
                                name="recurrenceType"
                                control={control}
                                defaultValue=""
                                rules={{ required: "Este campo es requerido" }}
                                render={({ field }) => (
                                  <Select {...field} label="Recurrente por">
                                    <MenuItem value="Semana">Semana</MenuItem>
                                    <MenuItem value="Periocidad">
                                      Periocidad
                                    </MenuItem>
                                  </Select>
                                )}
                              />
                              <FormHelperText>
                                {errors.recurrenceType?.message}
                              </FormHelperText>
                            </FormControl>
                          </Grid>

                          {recurrenceType === "Semana" && (
                            <>
                              <Grid item xs={12}>
                                <FormControlLabel
                                  control={
                                    <Checkbox {...register("allDays")} />
                                  }
                                  label="Todos los días"
                                />
                              </Grid>

                              {!allDays && (
                                <Grid item xs={12}>
                                  <FormGroup row>
                                    {daysOfWeek.map((day) => (
                                      <FormControlLabel
                                        key={day.value}
                                        control={
                                          <Checkbox
                                            {...register(`days.${day.value}`)}
                                          />
                                        }
                                        label={day.label}
                                      />
                                    ))}
                                  </FormGroup>
                                </Grid>
                              )}
                            </>
                          )}
                        </>
                      )}

                      <Grid item xs={12}>
                        <Button
                          variant="contained"
                          color="primary"
                          type="submit"
                          fullWidth
                        >
                          Guardar
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                </Box>
              </LocalizationProvider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AppointmentCreate;
