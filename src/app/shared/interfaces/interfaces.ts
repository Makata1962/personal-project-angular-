export interface SignUpResponse {
  fullname?: string;
  email?: string;
  phoneNumber?: string;
  password?: string;
};


// export interface LaptopData {
//   laptop: {
//     image: string;
//     name: string;
//     id: number;
//   };
//   user: {
//     name: string;
//     surname: string;
//   };
// } // list.component interface



export interface Team {
  id: number;
  name: string;
}



export interface Positions {
  id: number;
  name: string;
  team_id: number;
}


export interface Brands {
  id: number;
  name: string;
}

export interface Cpus {
  id: number;
  name: string;
}

export interface PostLaptop {
  name: string;
  surname: string;
  team_id: number;
  position_id: number;
  phone_number: string;
  email: string;
  token: string;
  laptop_name: string;
  laptop_image: string;
  laptop_brand_id: number;
  laptop_cpu: string;
  laptop_cpu_cores: number;
  laptop_cpu_threads: number;
  laptop_ram: number;
  laptop_hard_drive_type: string;
  laptop_state: string;
  laptop_purchase_date?: string;
  laptop_price: number;
}
