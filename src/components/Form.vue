<template>
  <!-- TODO: 
* Fix alignment between select and first name and last name form desktop
-->

  <!-- container  -->
  <div class="w-10/12 max-w-xl m-auto pt-8 pb-2.5">
    <h1 class="my-7">RSVP for MySQL Reseller Sales Recruitment Workshop</h1>
    <form class="sm:pb-7" @submit.prevent="handleSubmit">
      <ul>
        <li class="flex flex-col mb-7 sm:mb-8 sm:flex-row sm:w-full">
          <label for="company" class="inline-block px-1 mb-2.5 sm:mr-7"
            >Company <span class="text-red-500 ml-1.5">*</span>
          </label>
          <input
            type="text"
            id="company"
            v-model="company"
            class="inline-block border-solid border border-[#ccc] input-shadow py-1 px-0.5 sm:w-2/6"
          />
          <!-- 2) show the error if companyError is empty string -->
          <div v-if="companyError" class="text-rose-500">
            {{ companyError }}
          </div>
        </li>
        <li class="flex flex-col mb-7 sm:mb-8 sm:flex-row">
          <label for="title" class="inline-block px-1 mb-2.5 sm:mr-14"
            >Name<span class="text-red-500 ml-1.5">*</span>
          </label>
          <!-- container for the name part -->
          <div class="flex flex-col xs:flex-row xs:flex-wrap sm:gap-x-2.5">
            <div class="flex flex-col xs:w-full sm:w-1/6">
              <select
                name="prefix"
                id="prefix"
                class="border-solid border border-black py-1 px-0.5 xs:w-3/6 sm:w-full"
              >
                <option value="Mr">Mr.</option>
                <option value="Ms">Ms.</option>
              </select>
              <label
                class="text-xs text-[12px] font-extralight text-[#586834] my-0.5"
                >Prefix</label
              >
            </div>
            <div class="flex flex-col xs:w-3/6 sm:w-1/5">
              <input
                type="text"
                id="first-name"
                class="border-solid border border-[#ccc] input-shadow py-1 px-0.5 xs:w-full"
              />
              <label
                for="first-name"
                class="text-xs text-[12px] font-extralight text-[#586834] my-0.5"
                >First Name</label
              >
            </div>
            <div class="flex flex-col xs:w-3/6 sm:w-2/6">
              <input
                type="text"
                id="last-name"
                class="border-solid border border-[#ccc] input-shadow py-1 px-0.5 xs:w-11/12 xs:ml-1 sm:w-full"
              />
              <label
                for="last-name"
                class="text-xs text-[12px] font-extralight text-[#586834] my-0.5 xs:ml-0.5"
                >Last Name</label
              >
            </div>
          </div>
        </li>
        <li class="flex flex-col mb-7 sm:mb-8 sm:flex-row sm:w-full">
          <label for="job" class="px-1 mb-2.5 sm:mr-8"
            >Job Title <span class="text-red-500 ml-1.5">*</span></label
          >
          <div class="flex flex-col sm:w-2/6">
            <input
              type="text"
              id="job-title"
              class="border-solid border border-[#ccc] input-shadow py-1 px-0.5"
            />
            <label
              for="job-title"
              class="text-xs text-[12px] font-extralight text-[#586834] my-0.5"
              >(eg Executive, Manger, etc.)</label
            >
          </div>
        </li>
        <li class="flex flex-col mb-7 sm:mb-8 sm:flex-row sm:w-full">
          <label for="email" class="px-1 mb-2.5 sm:mr-14"
            >E-mail<span class="text-red-500 ml-1.5">*</span></label
          >

          <input
            type="email"
            placeholder="ex: myname@example.com"
            class="border-solid border border-[#ccc] input-shadow placeholder:text-[#586834] placeholder:font-thin py-1 px-0.5 sm:w-3/6"
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
                class="border-solid border border-[#ccc] input-shadow py-1 px-0.5"
              />
              <label
                for="area-code"
                class="text-xs text-[12px] font-extralight text-[#586834] my-0.5"
                >(EX. 012, 016)</label
              >
            </div>
            <div class="flex justify-center items-center h-7">
              <span class="hidden sm:inline-block">-</span>
            </div>

            <div class="flex flex-col w-2/3 sm:w-5/12">
              <input
                type="tel"
                id="phone-number"
                class="border-solid border border-[#ccc] input-shadow py-1 px-0.5"
              />
              <label
                for="phone-number"
                class="text-xs text-[12px] font-extralight text-[#586834] my-0.5"
                >(Last 7 Digit)</label
              >
            </div>
          </div>
        </li>
      </ul>
      <button
        type="submit"
        class="sm:block bg-gradient-to-t from-[#3d94f6] to-[#1e62d0] border-solid border border-[#2e7be3] button-shadow rounded-md text-white py-2.5 px-4 mt-5 sm:mt-12 w-full sm:w-2/12 sm:mt-6 sm:mn-0 sm:mx-auto"
      >
        Submit
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      company: '',
      /* 1) Create companyError */
      companyError: '',
    };
  },
  methods: {
    handleSubmit() {
      /* 3) Validate password lenght to be over 1 character.
      I use the ternary operator for that. So, I say, if
      password is greater than five, then passwordError is
      equal to empty string. Else, passwordError is
      equal to  "Password must be at least 6 characters long"*/
      this.companyError =
        this.company.length > 1 ? '' : 'This field is required';

      //  If password validates simulate uploading to database by console loging
      if (!this.passwordError) {
        console.log('email: ', this.email);
      }
    },
  },
};
</script>

<style></style>
