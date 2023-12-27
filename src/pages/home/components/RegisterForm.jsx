import React, { useEffect, useRef } from "react";
import { omit } from "lodash";
import { MdMail, MdPerson } from "react-icons/md";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import { useTranslation } from "react-i18next";
import CustomInput from "../../../components/Forms/CustomInput";
import useForm from "../../../hooks/useForm";
import { useDispatch } from "react-redux";
import emailjs from "@emailjs/browser";
import { selectListRegisterState } from "../../../redux/modal.slice";
import { useSelector } from "react-redux";
import { selectPage, selectProject } from "../../../redux/systemSettingsSlice";
import { useNavigate } from "react-router-dom";
import { register } from "../../../redux/modal.slice";
import ReactGA from "react-ga";
const defaultFormState = {
	email: "",
	fullName: "",
	phone: "",
	Page: "",
	Project: "",
};
const RegisterForm = () => {
	const { t, i18n } = useTranslation();
	const dispatch = useDispatch();
	const page = useSelector(selectPage);
	const project = useSelector(selectProject);
	const navigate = useNavigate();
	const form = useRef();
	const listRegister = useSelector(selectListRegisterState);
	const {
		disabled,
		setErrors,
		errors,
		setValues,
		values,
		handleChange,
		handleSubmit,
	} = useForm(submit, {
		...defaultFormState,
		Project: page?.projects[0].ProjectName.en,
		Page: page?.PageName.en,
	});
	const isLoading = false;

	const sendEmail = (e) => {
		emailjs
			.sendForm(
				"service_5wdnu6j",
				"template_slqqcpm",
				form.current,
				"sxh5TJan60LQqD6Sw",
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				},
			);
	};
	useEffect(() => {
		setValues({
			...values,
			Project: project?.ProjectName.en,
			Page: page?.PageName.en,
		});
	}, [page, project]);

	async function submit(e) {
		ReactGA.event({
			Name: "Submit lead V1.",
			category: "Submit lead form",
			action: "Clicked on Send",
			label: "w0fdCKfllYMZEP-So-Uo",
		});
		let formData = new FormData(form.current);
		formData.append("Project", values.Project);
		try {
			let sameEmail = listRegister.find((element) => {
				return element.email == values.email;
			});
			let samePhone = listRegister.find((element) => {
				return element.phoneNo == values.phone;
			});
			if (!sameEmail && !samePhone) {
				const response = await fetch(import.meta.env.VITE_ZAPPIER_URL, {
					method: "POST",
					body: formData,
					"Content-Type": "multipart/form-data",
				});
				sendEmail(e);

				dispatch(
					register({
						email: values.email,
						phoneNo: values.phone,
					}),
				);

				navigate("/thankyou");
			} else {
				alert("We Already Have a registration with this data");
			}
		} catch (error) {
			console.log("Error here:", error);
		}
		setValues(defaultFormState);
	}
	return (
		<div id='register' className='w-[75vw] max-w-[700px] my-12'>
			<p className='text-secondary font-semibold text-4xl mb-4 flex justify-center items-center'>
				For more information
			</p>
			<form
				ref={form}
				className='flex flex-col justify-between items-stretch h-full w-full space-y-4'
			>
				<CustomInput
					icon={<MdPerson className='text-white text-med' />}
					placeholder={t("formFullName")}
					type='text'
					name='fullName'
					id='fullName'
					value={values.fullName}
					onChange={handleChange}
					error={Boolean(errors?.fullName)}
				/>

				<CustomInput
					icon={<MdMail className='text-white text-med' />}
					placeholder={t("formEmail")}
					type='email'
					name='email'
					id='email'
					value={values.email}
					onChange={handleChange}
					error={Boolean(errors?.email)}
				/>

				<PhoneInput
					country={"ae"}
					placeholder={t("formPhoneNumber")}
					enableSearch={true}
					inputProps={{
						name: "phone",
						id: "phone",
						required: true,
					}}
					onChange={(phone) => {
						if (phone.length < 10) {
							setErrors({
								...errors,
								phone: "Phone Number is atleast 10 digits",
							});
						} else {
							let newObj = omit(errors, "phone");
							setErrors(newObj);
						}
						setValues({ ...values, phone: phone });
					}}
					value={values.phone}
					containerStyle={{
						outline: "none",
						outlineOffset: "0px",
						boxShadow: "none",
					}}
					containerClass={`${
						Boolean(errors.phone)
							? "!border-[1px] border-red-500"
							: "!border-b-[1px] border-white"
					} px-1 flex bg-white/20 rounded-md !outline-none`}
					inputClass={`!bg-transparent !text-white !w-full !py-3 !text-lg !h-full !border-none ${
						i18n.language == "en" ? "px-0" : "mx-10"
					} !outline-none`}
					buttonClass={`!border-none !outline-none !text-lg `}
					buttonStyle={{
						direction: "ltr",
						outline: "none",
						outlineOffset: "0px",
						boxShadow: "none",
					}}
					dropdownClass='!backdrop-blur-[21px]'
					dropdownStyle={{
						backgroundColor: page?.Colors?.Primary,
						opacity: "70%",
						color: page?.Colors?.Third,
					}}
					searchClass='!backdrop-blur-[21px]'
					searchStyle={{
						backgroundColor: page?.Colors?.Primary,
						opacity: "70%",
						color: page?.Colors?.Secondary,
					}}
					inputStyle={{
						direction: "ltr",
						outline: "none",
						outlineOffset: "0px",
						boxShadow: "none",
					}}
				/>

				<div className='space-y-1'>
					<p className='text-tiny text-white'>{t("Project")} </p>
					<div className='flex justify-center items-center border-[1px] rounded-md p-1 gap-x-2'>
						{page.projects.map((item, index) => {
							return (
								<React.Fragment key={index}>
									<div
										className={`py-3 rounded-md text-tiny w-full flex justify-center items-center cursor-pointer transition-all duration-300 tracking-tighter`}
										style={{
											backgroundColor:
												values.Project == item.ProjectName.en
													? page?.Colors?.Secondary
													: page?.Colors?.Primary,
											color:
												values.Project == item.ProjectName.en
													? page?.Colors?.Primary
													: page?.Colors?.Secondary,
										}}
										onClick={() => {
											navigate(`/${page?.slug}/${item?.slug}`);
											// setValues({ ...values, Project: item.ProjectName.en });
										}}
									>
										{item?.ProjectName[i18n.language]}
									</div>
									{index !== page?.projects.length - 1 && (
										<div className='h-10 w-1 bg-white/50' />
									)}
								</React.Fragment>
							);
						})}
					</div>
				</div>
				<button
					className={`font-semibold text-smaller md:text-small w-full py-2  disabled:bg-none disabled:bg-gray-500 disabled:text-white rounded-md ${
						isLoading && "animate-pulse"
					} `}
					style={{
						backgroundColor: page?.Colors?.Secondary,
						color: page?.Colors?.Primary,
					}}
					onClick={handleSubmit}
					disabled={disabled}
				>
					{isLoading ? t("sending") : t("send")}
				</button>
			</form>
		</div>
	);
};

export default RegisterForm;
