
import { useForm } from "@tanstack/react-form";
import { Input } from "@/components/ui/input"





function SignupForm () {
  const form = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      gender: "",
      dateOfBirth: "",
    },
    onSubmit: async (values) => {
      console.log("Form Submitted:", values);
      alert("Form submitted successfully");
      // clear form when sub,itted
      form.reset();
   
    },
    
  });
return (
  <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
    <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Signup Form</h2>
    <form
      onSubmit={(e) => {
        e.preventDefault();
        form.handleSubmit();
      }}
      className="space-y-4"
    >
      {/* First Name */}
      <form.Field
        name="firstName"
        validators={{
          onChange: ({ value }) =>
            !value ? "First name is required" : undefined,
        }}
      >
        {(children) => (
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1 ">First Name:</label>
            <Input
               value={children.state.value}
               placeholder="Enter FirstName"
                autoComplete="given-name"
               onChange={(e) => children.handleChange(e.target.value)}
             />
            {children.state.meta.errors.length > 0 && (
              <p className="text-red-500 text-sm mt-1">{children.state.meta.errors[0]}</p>
            )}
          </div>
        )}
      </form.Field>


      {/* Last Name */}
      <form.Field
        name="lastName"
        validators={{
          onChange: ({ value }) =>
            !value ? "Last name is required" : undefined,
        }}
      >
        {(field) => (
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Last Name:</label>
            <Input
               value={field.state.value}
               autoComplete="given-name"
               placeholder="Enter LastName"
               onChange={(e) => field.handleChange(e.target.value)}
             />
            {field.state.meta.errors.length > 0 && (
              <p className="text-red-500 text-sm mt-1">{field.state.meta.errors[0]}</p>
            )}
          </div>
        )}
      </form.Field>



      {/* Email */}
      <form.Field
        name="email"
        validators={{
          onChange: ({ value }) =>
            !value
              ? "Email is required"
              : !value.includes("@")
              ? "Email is invalid"
              
              : undefined,
        }}
      >
        {(field) => (
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Email:</label>
            <Input
               type="email"
               autoComplete="email"
               placeholder="Enter Email"
               value={field.state.value}
               onChange={(e) => field.handleChange(e.target.value)}
             />
            {field.state.meta.errors.length > 0 && (
              <p className="text-red-500 text-sm mt-1">{field.state.meta.errors[0]}</p>
            )}
          </div>
        )}
      </form.Field>


      {/* Password */}
      <form.Field
        name="password"
        validators={{
          onChange: ({ value }) =>
            !value
              ? "Password is required"
              : value.length < 6
              ? "Password must be at least 6 characters"
              : undefined,


        }}
      >
        {(field) => (
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Password:</label>
            <Input
               type="password"
                autoComplete="new-password"
                placeholder="Enter Password"
               value={field.state.value}
               onChange={(e) => field.handleChange(e.target.value)}
             />
            {field.state.meta.errors.length > 0 && (
              <p className="text-red-500 text-sm mt-1">{field.state.meta.errors[0]}</p>
            )}
          </div>
        )}
      </form.Field>



      {/* Confirm Password */}
      <form.Field
        name="confirmPassword"
        validators={{
          onChange: ({ value, fieldApi }) =>
            !value
              ? "Confirm password is required"
              : value !== fieldApi.form.getFieldValue("password")
              ? "Passwords do not match"
              : undefined,
        }}
      >
        {(field) => (
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password:</label>
            <Input
               type="password"
                autoComplete="new-password"
                placeholder="Enter Confirm Password"
               value={field.state.value}
               onChange={(e) => field.handleChange(e.target.value)}
             />
            {field.state.meta.errors.length > 0 && (
              <p className="text-red-500 text-sm mt-1">{field.state.meta.errors[0]}</p>
            )}
          </div>
        )}
      </form.Field>



      {/* Gender */}
      <form.Field
        name="gender"
        validators={{
          onChange: ({ value }) =>
            !value ? "Please select a gender" : undefined,
        }}
      >
        {(field) => (
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Gender:</label>
            
            <select
               className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
               value={field.state.value}
               onChange={(e) => field.handleChange(e.target.value)}
             >
              
              <option value="">Select...</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
               <option value="Other">Others</option>
            </select>
            {field.state.meta.errors.length > 0 && (
              <p className="text-red-500 text-sm mt-1">{field.state.meta.errors[0]}</p>
            )}
          </div>
        )}
      </form.Field>



      {/* Date of Birth */}
      <form.Field
        name="dateOfBirth"
        validators={{
          onChange: ({ value }) =>
            !value ? "Date of birth is required" : undefined,
        }}
      >
        {(field) => (
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth:</label>
            <Input
               type="date"
               value={field.state.value}
               placeholder="Enter dateOfBirth"
               onChange={(e) => field.handleChange(e.target.value)}
             />
            {field.state.meta.errors.length > 0 && (
              <p className="text-red-500 text-sm mt-1">{field.state.meta.errors[0]}</p>
            )}
          </div>
        )}
      </form.Field>




      <button type="submit" className="w-full bg-blue-500 text-white py-2 
      px-4 rounded-md hover:bg-blue-600 focus:outline-none 
      focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors">Submit</button>
    </form>
  </div>
);
}

export default SignupForm;
