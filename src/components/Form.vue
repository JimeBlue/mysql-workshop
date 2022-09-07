<template>
  <!-- container  -->
  <div class="w-10/12 max-w-xl m-auto pt-8 pb-2.5">
    <h1 class="my-7">RSVP for MySQL Reseller Sales Recruitment Workshop</h1>
    <form action="" class="form">
      <ul>
        <li class="flex flex-col mb-5 sm:flex-row sm:w-full">
          <label for="company" class="inline-block px-1 mb-2.5 sm:mr-7"
            >Company <span class="text-red-500 ml-1.5">*</span>
          </label>
          <input
            type="text"
            id="company"
            class="inline-block border-solid border border-[#ccc] input-shadow sm:w-2/6"
          />
        </li>
        <li class="flex flex-col mb-5 sm:flex-row">
          <label for="title" class="inline-block px-1 mb-2.5 sm:mr-14"
            >Name<span class="text-red-500 ml-1.5">*</span>
          </label>
          <!-- container for the name part -->
          <div class="flex flex-col xs:flex-row xs:flex-wrap sm:gap-x-2.5">
            <div class="flex flex-col xs:w-full sm:w-1/6">
              <select
                name="prefix"
                id="prefix"
                class="border-solid border border-black shadow-inner shadow-[0px_1px_2px_rgba(204,204,204/ 0.05)] xs:w-3/6 sm:w-full"
              >
                <option value="Mr">Mr.</option>
                <option value="Ms">Ms.</option>
              </select>
              <label class="text-xs font-light text-[#586834] my-0.5"
                >Prefix</label
              >
            </div>
            <div class="flex flex-col xs:w-3/6 sm:w-1/5">
              <input
                type="text"
                id="first-name"
                class="border-solid border border-[#ccc] shadow-inner shadow-[0px_1px_2px_rgba(204,204,204/ 0.05)] xs:w-full"
              />
              <label
                for="first-name"
                class="text-xs font-light text-[#586834] my-0.5"
                >First Name</label
              >
            </div>
            <div class="flex flex-col xs:w-3/6 sm:w-2/6">
              <input
                type="text"
                id="last-name"
                class="border-solid border border-[#ccc] shadow-inner shadow-[0px_1px_2px_rgba(204,204,204/ 0.05)] xs:w-11/12 xs:ml-1 sm:w-full"
              />
              <label
                for="last-name"
                class="text-xs font-light text-[#586834] my-0.5 xs:ml-0.5"
                >Last Name</label
              >
            </div>
          </div>
        </li>
        <li class="flex flex-col mb-5 sm:flex-row sm:w-full">
          <label for="job" class="px-1 mb-2.5 sm:mr-8"
            >Job Title <span class="text-red-500 ml-1.5">*</span></label
          >
          <div class="flex flex-col sm:w-2/6">
            <input
              type="text"
              id="job-title"
              class="border-solid border border-[#ccc] shadow-inner shadow-[0px_1px_2px_rgba(204,204,204/ 0.05)]"
            />
            <label
              for="job-title"
              class="text-xs font-light text-[#586834] my-0.5"
              >(eg Executive, Manger, etc.)</label
            >
          </div>
        </li>
        <li class="flex flex-col mb-5 sm:flex-row sm:w-full">
          <label for="email" class="px-1 mb-2.5 sm:mr-14"
            >Email<span class="text-red-500 ml-1.5">*</span></label
          >

          <input
            type="email"
            placeholder="ex: myname@example.com"
            class="border-solid border border-[#ccc] shadow-inner shadow-[0px_1px_2px_rgba(204,204,204/ 0.05)] placeholder:text-[#586834] placeholder:font-thin sm:w-3/6"
          />
        </li>
        <li class="flex flex-col sm:flex-row sm:w-full">
          <label for="" class="px-1 mb-2.5 sm:mr-0.5"
            >Mobile Phone<span class="text-red-500 ml-1.5">*</span>
          </label>
          <div class="flex gap-x-1.5 sm:w-4/5">
            <div class="flex flex-col w-1/3 sm:w-5/12">
              <input
                type="tel"
                id="area-code"
                class="border-solid border border-[#ccc] shadow-inner shadow-[0px_1px_2px_rgba(204,204,204/ 0.05)]"
              />
              <label
                for="area-code"
                class="text-xs font-light text-[#586834] my-0.5"
                >(EX. 012, 016)</label
              >
            </div>
            <span class="hidden sm:inline-block">-</span>
            <div class="flex flex-col w-2/3 sm:w-5/12">
              <input
                type="tel"
                id="phone-number"
                class="border-solid border border-[#ccc] shadow-inner shadow-[0px_1px_2px_rgba(204,204,204 /0.05)]"
              />
              <label
                for="phone-number"
                class="text-xs font-light text-[#586834] my-0.5"
                >(Last 7 Digit)</label
              >
            </div>
          </div>
        </li>
      </ul>
      <button
        type="submit"
        class="sm:block bg-gradient-to-t from-[#3d94f6] to-[#1e62d0] border-solid border border-[#2e7be3] button-shadow rounded-md text-white py-2.5 px-4 mt-5 w-full sm:w-2/12 sm:mt-6 sm:mn-0 sm:mx-auto"
      >
        Submit
      </button>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
