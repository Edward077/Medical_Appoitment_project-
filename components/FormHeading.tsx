type FormHeadingProps = {
  title: string;
  description?: string;
};

const FormHeading = ({ title, description }: FormHeadingProps) => {
  return (
    <div className="text-center pb-4">
      <h1 className="dark:text-slate-800 scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-5xl">
        {title}
      </h1>
      <span className="text-gray-500">{description}</span>
    </div>
  );
};

export default FormHeading;
