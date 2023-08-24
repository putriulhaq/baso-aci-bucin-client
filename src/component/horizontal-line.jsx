function Hr(props) {
  console.log(props.data)
  return (
    <div class="inline-flex items-center justify-center w-full bg-custom-F0EEED">
      <hr class="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      {/* <span class="absolute px-3 font-medium text-gray-900 -translate-x-1/2 left-1/2 bg-custom-F0EEED dark:text-white dark:bg-gray-900">
        Menu
      </span> */}
      <span>
      <h2 class="absolute mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
        {props.data}
      </h2>
      </span>
    </div>
  );
}
export default Hr;
