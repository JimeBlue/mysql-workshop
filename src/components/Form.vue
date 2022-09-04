<template>
  <!-- container  -->
  <div class="w-10/12 max-w-xl m-auto pt-8 pb-2.5">
    <h1 class="my-7">RSVP for MySQL Reseller Sales Recruitment Workshop</h1>
    <form action="">
      <ul>
        <li class="flex flex-col mb-5">
          <label for="company" class="inline-block px-1 mb-2.5"
            >Company <span class="text-red-500 ml-1.5">*</span></label
          >
          <input
            type="text"
            id="company"
            class="inline-block border-solid border border-[#ccc] shadow-inner shadow-[0px_1px_2px_rgba(204,204,204/ 0.05)]"
          />
        </li>
        <li class="flex flex-col mb-5">
          <label for="title" class="inline-block px-1 mb-2.5"
            >Name<span class="text-red-500 ml-1.5">*</span></label
          >
          <div class="flex flex-col">
            <select
              name="prefix"
              id="prefix"
              class="border-solid border border-black shadow-inner shadow-[0px_1px_2px_rgba(204,204,204/ 0.05)]"
            >
              <option value="Mr">Mr.</option>
              <option value="Ms">Ms.</option>
            </select>
            <label class="text-xs font-light text-[#586834] my-0.5"
              >Prefix</label
            >
          </div>
          <div class="flex flex-col">
            <input
              type="text"
              id="first-name"
              class="border-solid border border-[#ccc] shadow-inner shadow-[0px_1px_2px_rgba(204,204,204/ 0.05)]"
            />
            <label
              for="first-name"
              class="text-xs font-light text-[#586834] my-0.5"
              >First Name</label
            >
          </div>
          <div class="flex flex-col">
            <input
              type="text"
              id="last-name"
              class="border-solid border border-[#ccc] shadow-inner shadow-[0px_1px_2px_rgba(204,204,204/ 0.05)]"
            />
            <label
              for="last-name"
              class="text-xs font-light text-[#586834] my-0.5"
              >Last Name</label
            >
          </div>
        </li>
        <li class="flex flex-col mb-5">
          <label for="job" class="px-1 mb-2.5"
            >Job Title <span class="text-red-500 ml-1.5">*</span></label
          >
          <div class="flex flex-col">
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
        <li class="flex flex-col mb-5">
          <label for="email" class="px-1 mb-2.5"
            >Email<span class="text-red-500 ml-1.5">*</span></label
          >

          <input
            type="email"
            placeholder="ex: myname@example.com"
            class="border-solid border border-[#ccc] shadow-inner shadow-[0px_1px_2px_rgba(204,204,204/ 0.05)] placeholder:text-[#586834] placeholder:font-thin"
          />
        </li>
        <li class="flex flex-col">
          <label for="" class="px-1 mb-2.5"
            >Mobile Phone<span class="text-red-500 ml-1.5">*</span>
          </label>
          <div class="flex gap-x-1.5">
            <div class="flex flex-col w-1/3">
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
            <span class="hidden">-</span>
            <div class="flex flex-col w-2/3">
              <input
                type="tel"
                id="phone-number"
                class="border-solid border border-[#ccc] shadow-inner shadow-[0px_1px_2px_rgba(204,204,204/ 0.05)]"
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
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
