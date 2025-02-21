type Response = {
  success: boolean;
  message: string;
};

export const reqLogin = () => {
  interface DataProps extends Response {
    data: { token: string };
  }
  return new Promise<DataProps>((resolve, reject) => {
    setTimeout(() => {
      resolve({
        success: true,
        data: {
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7IjEiOjEsIjIiOiJhZG1pbiIsIjMiOjF9LCJpYXQiOjE2ODg0OTQxMTgsImV4cCI6MTY4ODUxNTcxOH0.AQiukoV-hP3EQu4wXtBdP7IBfrOFYyMgXPGIb2JE9Kk",
        },
        message: "Success",
      });
    }, 1000);
  });
};

export const reqLogValidation = () => {
  interface DataProps extends Response {
    data: { role: number };
  }

  return new Promise<DataProps>((resolve, reject) => {
    setTimeout(() => {
      resolve({ success: true, data: { role: 2 }, message: "Sucess" });
    }, 1000);
  });
};

export const reqGetAllUsers = [
  {
    success: true,

    data: [
      {
        id: 1,
        email: "admin",
        name: null,
        role: 1,
        sectors: [
          {
            id: 1,
            name: "Administrativo",
          },
          {
            id: 2,
            name: "Financeiro",
          },
          {
            id: 3,
            name: "Suporte",
          },
          {
            id: 4,
            name: "Marketing",
          },
        ],
      },
      {
        id: 2,
        email: "user",
        name: null,
        role: 2,
        sectors: [
          {
            id: 3,
            name: "Suporte",
          },
          {
            id: 2,
            name: "Financeiro",
          },
        ],
      },
    ],

    message: "success",
  },
];

export const reqGetUserBy = [
  {
    success: true,
    data: {
      id: 1,
      email: "admin",
      name: null,
      role: 1,
      gender: "M",
      sectors: [
        {
          id: 1,
          name: "Administrativo",
        },
        {
          id: 2,
          name: "Financeiro",
        },
        {
          id: 3,
          name: "Suporte",
        },
        {
          id: 4,
          name: "Marketing",
        },
      ],
    },
    message: "success",
  },
];

export const reqCreateUser = [
  {
    success: true,
    data: "User Created Successfully",
    message: "success",
  },
];

export const reqUpdateUser = [
  {
    success: true,
    data: "User Updated Successfully",
    message: "success",
  },
];

export const reqDeleteUser = [
  {
    success: true,
    data: "User Disabled Successfully",
    message: "success",
  },
];

export const reqGetAllSectors = [
  {
    success: true,
    data: [
      {
        id: 1,
        name: "Administrativo",
      },
      {
        id: 2,
        name: "Financeiro",
      },
      {
        id: 3,
        name: "Suporte",
      },
      {
        id: 4,
        name: "Marketing",
      },
    ],
    message: "success",
  },
];

export const reqGetSectorBy = [
  {
    success: true,
    data: {
      id: 2,
      name: "Financeiro",
    },
    message: "success",
  },
];

export const reqCreateSector = [
  {
    success: true,
    data: "Sector Created Successfully",
    message: "success",
  },
];

export const reqUpdateSector = [
  {
    success: true,
    data: "Sector Updated Successfully",
    message: "success",
  },
];

export const reqDeleteSector = [
  {
    success: true,
    data: "Sector Deleted Successfully",
    message: "success",
  },
];

export const reqGenerateApiToken = [
  {
    success: true,
    data: {
      session: "nova",
      token: "$2b$10$N9xrdqCW4S1jpNyB44L1nuXj79EAvo83MS6uxhBg8JOvWNLV8QlaS",
    },
    message: "success",
  },
];

export const reqStartWppSession = [
  {
    success: true,
    data: {
      status: "QRCODE",
      qrcode:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARQAAAEUCAYAAADqcMl5AAAAAklEQVR4AewaftIAABJeSURBVO3BQY4YybLgQDJR978yR0tfBZDIKKnfHzezP1hrrQse1lrrkoe11rrkYa21LnlYa61LHtZa65KHtda65GGttS55WGutSx7WWuuSh7XWuuRhrbUueVhrrUse1lrrkoe11rrkYa21LvnhI5W/qeJEZaqYVE4qTlROKiaVk4p/SWWqmFROKiaVqWJSmSomlaliUpkqJpWTii9UpopJZaqYVE4qJpW/qeKLh7XWuuRhrbUueVhrrUt+uKziJpUvVKaKSWVS+UJlqvhC5YuKSeWLijdU3qiYVE5U3lB5o2KqmFT+poqbVG56WGutSx7WWuuSh7XWuuSHX6byRsUbKlPFGxVvqEwVk8obKlPFScWkMlWcVEwqb6hMFVPFpDJVnKicVEwqJxUnKlPFpHJScaLym1TeqPhND2utdcnDWmtd8rDWWpf88P8ZlTcqpoo3VN5QOVE5UZkq3lCZKt5QOVE5qZhUTireUJkqJpWTiknljYpJ5f+Sh7XWuuRhrbUueVhrrUt++P9MxYnKicpUMVVMKjdVTCpTxYnKGypvVEwqU8WJyonKVDGpTBUnKlPFpDKpnFRMKpPKVPF/ycNaa13ysNZalzystdYlP/yyiv8SlanijYpJ5aRiUpkqJpUTlTdU3qh4Q2VSmSpOVKaKN1SmiknlpGJSmSpOVCaVk4qbKv5LHtZa65KHtda65GGttS754TKV/xKVqWJSmSomlanipGJSmSomlaliUpkqJpU3KiaVE5Wp4qRiUpkq3lCZKr6omFSmikllqjipmFROVKaKE5X/soe11rrkYa21LnlYa61L7A/+h6n8L6mYVKaKE5U3Kk5Upoo3VE4qJpWp4g2Vk4rfpDJVvKFyUvG/7GGttS55WGutSx7WWusS+4MPVKaKSeWmijdU3qiYVE4qblI5qbhJ5aaKSeWLijdU3qiYVKaKE5Wp4g2VqWJSuaniNz2stdYlD2utdcnDWmtd8sNHFTdVvKEyVXyhclIxqUwVk8pJxVRxojJVTCpvVLyh8kbFicobKicVk8qJylTxhcpUcVIxqZxUTCpfqEwVXzystdYlD2utdcnDWmtd8sNfVnGiclIxVZxUTCq/SWWqOFE5qThRmSomlaniDZWTihOVk4pJZVI5qZhUpopJ5Q2VqeKk4g2Vk4pJZap4Q+U3Pay11iUPa611ycNaa11if/APqUwVJypTxYnKGxWTyknFpDJVTCpfVEwqJxVvqNxUMam8UTGpnFRMKlPFicpUMalMFV+onFT8JpWp4ouHtda65GGttS55WGutS374SGWquEllqphU3qj4TRUnFW+o3KQyVUwVJyonFTepTBUnKicqU8VUMamcqLxRcVIxqZxUvKHymx7WWuuSh7XWuuRhrbUu+eGXqbyhMlVMKlPFpDJVTCpTxRsVX6icVEwVX6hMFZPKGxU3VUwqU8WkMlV8oTJVTBVvqEwVk8pU8UbFicpJxW96WGutSx7WWuuSh7XWuuSHv6xiUpkqJpUTlaliUpkqJpWTiknli4o3VE4qbqo4UZkqJpUvKt5QeaPiRGWqmFSmiqnipopJ5aTiROWk4ouHtda65GGttS55WGutS374y1TeqHhD5URlqphUvqj4TRWTylQxqUwVU8Wk8obKFypTxaQyVZyoTBWTylRxojJVTCpTxaTyhsobFZPKVDFV/KaHtda65GGttS55WGutS+wP/iKVmyomld9UMam8UTGpnFTcpHJSMalMFW+oTBWTylQxqZxUTCpTxW9SOamYVN6omFSmiknlpGJSmSq+eFhrrUse1lrrkoe11rrE/uADlaliUpkqJpWp4g2VqWJSmSpOVKaKSWWqOFE5qThR+ZsqTlSmijdU3qh4Q+WNijdU3qh4Q+Wk4kRlqphUpoqbHtZa65KHtda65GGttS754aOKLyomlTcqJpWp4kRlqphUpopJ5aRiUnmj4kRlqnhD5UTlpopJZao4UZkqTireUHmjYlI5UZkqTiomlaniRGWqmFSmii8e1lrrkoe11rrkYa21LrE/uEjlpOILlTcq/iWVf6niC5WpYlKZKiaVqWJSOamYVE4q3lCZKk5UTipOVE4qTlSmijdUTiq+eFhrrUse1lrrkoe11rrE/uAvUpkqTlROKiaVqWJSOak4UZkqJpWTihOVqeImlTcqvlC5qeINlaniC5UvKiaVqWJSOamYVKaKv+lhrbUueVhrrUse1lrrkh8uU5kq3lCZKiaVN1ROKt6omFSmii8qJpWp4kRlqpgqJpU3VE4qpoo3VKaKE5U3VKaKLyq+qJhUTiomlaliUnmj4ouHtda65GGttS55WGutS364rOINlaliUpkqvqiYVKaKSeU3qUwVU8WJyhcVb1ScqEwVX6i8UXGiMqlMFZPKVHGiclIxqUwVk8pJxaQyVUwqv+lhrbUueVhrrUse1lrrkh8+Ujmp+KJiUpkq3lA5UTmpeENlqnhD5aRiUplUTiomlaniROUNlaliqjhReUNlqjhRmSomlZOKE5Wp4guVqeKkYlK56WGttS55WGutSx7WWusS+4OLVP5LKk5U3qg4UZkqJpWp4g2VNyq+UDmpeEPljYpJZaqYVN6oeEPljYpJZaqYVN6oOFGZKiaVqeKLh7XWuuRhrbUueVhrrUt++McqJpWpYlKZKt5QmSpOVE5UpopJZaqYVKaKSWWqmFSmiknlpOKNihOVqWKqmFSmipOKk4pJZaqYVE4qTireqPii4kRlqjipuOlhrbUueVhrrUse1lrrEvuDD1SmihOVk4pJ5aRiUjmpOFE5qZhUbqqYVL6omFSmiknli4oTlTcqTlTeqPhC5aRiUjmpmFTeqDhReaPii4e11rrkYa21LnlYa61L7A8+UJkqfpPKGxVfqEwVX6hMFZPKVHGiMlVMKlPFicpJxaRyUvGbVKaKN1SmihOVqeI3qZxUvKFyUvHFw1prXfKw1lqXPKy11iX2BxepTBWTyn9ZxaTyRcUbKlPFicpJxYnKTRWTylQxqXxRcaIyVdykMlVMKv8lFb/pYa21LnlYa61LHtZa65IfLquYVKaKSWWqeENlqphUpopJ5aRiUvlCZao4UXmjYlJ5o+INlZOKSeWNiknlROUNlaniROVEZaqYVE4q3lD5L3lYa61LHtZa65KHtda65IdfVvGFylTxX1JxonKiMlVMKlPFicpUMam8oTJVnKhMFScVJypfVEwqJypfVJxUTConKlPFGxWTyknFFw9rrXXJw1prXfKw1lqX/PCRym+qeENlqnhDZaqYKiaVNypuUjlR+aLijYpJZap4o2JSOan4TRVfqLxR8UbFGxU3Pay11iUPa611ycNaa11if/AXqfymiknlpGJS+aLiDZWTijdUpopJ5W+qmFS+qHhDZao4UZkqJpWTikllqphUflPFicpU8cXDWmtd8rDWWpc8rLXWJT9cpjJVTBVfqEwVk8oXFZPKTSpTxRsqJxWTylQxqZxUTConFW9UTCpTxYnKGypTxVTxRsWkMlWcVJyonFScqPxND2utdcnDWmtd8rDWWpf8cFnFGyp/U8WJyknFGyonKlPFFypTxaRyUjGpTBVfVEwqU8WkclIxqZxUTCpvVHyh8kXFpDJV/EsPa611ycNaa13ysNZal9gffKAyVZyoTBVvqEwVJyo3VUwqU8WJylQxqUwVk8pUcaJyUjGpTBWTylQxqUwVJypTxYnKVHGiMlV8oTJVnKh8UfG/5GGttS55WGutSx7WWuuSHy5TmSq+UPmi4guV/5KKSWWqmComlUnlRGWqeEPlpOJEZaqYVE4qJpU3KqaKSeWkYlKZKiaVN1ROKiaVqeKmh7XWuuRhrbUueVhrrUt++GUqJyonFZPKpDJVTCpTxaTyN1W8ofKGyknFpDJVTConKlPFTRWTyhsqU8WkMlWcqJxUnFR8oTJVTCpvqEwVXzystdYlD2utdcnDWmtdYn9wkcpvqphU3qh4Q2WqmFSmijdUpooTlZsqTlR+U8WkclIxqUwVk8oXFScqU8WkclIxqdxUMalMFTc9rLXWJQ9rrXXJw1prXWJ/8A+pTBUnKn9TxRcqU8UXKicVk8pU8YXKVPGFyknFpDJVTCpfVPwmlZOKE5Wp4guVqeKLh7XWuuRhrbUueVhrrUt++EjlJpU3KiaVNyomlROVNyreUJkqpopJZVL5QuUNlaniROWLii8q3lD5ouILlROVk4q/6WGttS55WGutSx7WWuuSHy6rOFGZKiaVqeK/pGJSOVE5qThROal4Q+WNikllqnijYlKZKk5UTiomlUllqjipOFF5o2JSmVTeqJhUTlSmipse1lrrkoe11rrkYa21Lvnho4oTlTcqJpWbKt5QmSpOKiaVqeKNijdUvqiYVKaKSeWkYlI5UTmpOFGZKiaVL1Smin9J5UTlRGWq+OJhrbUueVhrrUse1lrrkh8+UpkqTiomlaliqphUpoovVE4qTiq+UJkqJpWTipOKSeVEZaqYVKaKE5Wp4kTlDZUvVKaKSeUNlZOKNypOVKaKE5Wp4qaHtda65GGttS55WGutS374xypOVE5UpopJZaqYKiaVE5WTihOVqWJSeUPli4pJZVKZKiaVN1ROKiaVSWWq+KJiUnlD5Q2V36QyVfxND2utdcnDWmtd8rDWWpfYH/wilZOKSWWqmFSmikllqjhRmSomld9UcaLyRsWkclPFpDJVTCpTxYnKScWJylRxojJVTCpfVLyh8kbFf8nDWmtd8rDWWpc8rLXWJfYHF6m8UXGi8kXFpPJFxaTyRcWkclPFFyonFZPKVHGiMlXcpDJVTConFScqU8Wk8r+k4ouHtda65GGttS55WGutS+wPPlB5o2JSOamYVE4qTlSmikllqphUpopJZaqYVL6ouEnli4o3VKaKSWWqOFGZKm5SOal4Q+Wk4kTlpOJfelhrrUse1lrrkoe11rrE/uADlS8qTlS+qDhRmSpOVE4qTlSmiptUpoovVN6oeEPlpGJSmSpOVE4qJpWpYlI5qZhU/qaKSWWqmFSmii8e1lrrkoe11rrkYa21LrE/uEjlpOILlaniROWmijdUpooTlaliUvmXKk5UpopJ5Y2KSWWqmFROKiaVqeILlaliUpkqblI5qfhND2utdcnDWmtd8rDWWpfYH/wilZsq3lB5o2JSmSpuUnmj4guVqeJE5aTiROWk4guVLyomlS8qJpWpYlL5ouINlZOKLx7WWuuSh7XWuuRhrbUu+eEjlTcqJpWp4kRlqphUTiomlUnlRGWqmFTeqHhDZaqYVE4qvqh4o2JSmVROKm6qeKPii4qbKk5UpoqpYlK56WGttS55WGutSx7WWuuSH/4ylaniROWLipOKSWWq+KLiX6qYVL5QOam4SWWqmComlaliUpkqpooTlZOKE5UvVN5QmSqmipse1lrrkoe11rrkYa21LrE/+B+mclJxonJSMan8pooTlZOKSeWNijdUpoo3VKaKE5WpYlK5qWJSmSomlaniRGWqeENlqnhDZar44mGttS55WGutSx7WWuuSHz5S+ZsqpopJZVKZKqaKNypOVKaKSeVEZar4l1Smii9UTlROKk4qJpU3KiaVf0llqnhD5W96WGutSx7WWuuSh7XWuuSHyypuUjlRmSpuUnmj4iaVN1SmihOVk4p/qeI3VXyhcqIyVbxR8UXFpDJV3PSw1lqXPKy11iUPa611yQ+/TOWNii9UTiomlaliqphUTlSmijcqTlSmiknlROVE5SaVqWJSmSpOVKaKSeWk4kTlN6mcqHyh8obKVPHFw1prXfKw1lqXPKy11iU//B9TcaJyojJVnFRMKpPKTRWTyhcVk8obFScVk8oXFV+oTBVTxRcqU8WJyt9UManc9LDWWpc8rLXWJQ9rrXXJD/+fqThROamYVKaKE5WpYlKZKiaVk4o3VKaKL1SmiqliUplU3qh4o+JEZaqYVL5QmSr+L3lYa61LHtZa65KHtda65IdfVvGbKiaVLyomlaniN1WcVJyoTBVTxYnKVDGpvKHyRsWJyknFFxUnFW+ovKFyUjGpTBX/0sNaa13ysNZalzystdYl9gcfqPxNFZPKVPGGyknFicobFW+ovFHxhcobFZPKVDGpvFHxhcpJxYnKGxUnKicVJypTxaQyVUwqJxVfPKy11iUPa611ycNaa11if7DWWhc8rLXWJQ9rrXXJw1prXfKw1lqXPKy11iUPa611ycNaa13ysNZalzystdYlD2utdcnDWmtd8rDWWpc8rLXWJQ9rrXXJw1prXfL/AOozrXlU2irSAAAAAElFTkSuQmCC",
      urlcode:
        "2@IGlAVSspBBokntuloI3I8xTsHaseDSoSsE3V01peNtGmi7NRlrF2VpvoHcBPVu03Ha6N/AXWL02gCg==,qlUZbXcMZzy6duuHcdCfq4l/h2P9Y/QwQ9dNJrGosAU=,zB42drkRgGsFBxAlYwcnmbiiXI/bWqwsOs1HlkSEwWE=,Xe8FKhgu1TJO/EHxOx3RAC269YROpY/GktXMiTKQ/fQ=",
      session: "nova",
    },
    message: "success",
  },
];

export const reqCloseSession = [
  {
    success: true,
    data: {
      message: "Session successfully closed",
    },
    message: "success",
  },
];

export const getChats = [
  {
    status: true,
    data: [
      {
        id: 1,
        name: "Jane Doe",
        userImg:
          "https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png",
        message: "Hello",
        phone: "55454891919",
        status: "Atendimento",
        sector: 3,
        chatId: 155,
        created_at: "2021-01-01T00:00:00.000Z",
        updated_at: "2021-01-01T00:00:00.000Z",
      },
      {
        id: 2,
        name: "55454891919",
        userImg:
          "https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png",
        message: "Hello",
        phone: "55454891919",
        status: "Atendimento",
        sector: 3,
        chatId: 155,
        created_at: "2021-01-01T00:00:00.000Z",
        updated_at: "2021-01-01T00:00:00.000Z",
      },
      {
        id: 3,
        name: "Jane Doe",
        userImg: "https://sf",
        message: "Hello",
        phone: "55454891919",
        status: "Atendimento",
        sector: 3,
        chatId: 155,
        created_at: "2021-01-01T00:00:00.000Z",
        updated_at: "2021-01-01T00:00:00.000Z",
      },
      {
        id: 4,
        name: "Jane Doe",
        userImg: "https://sf",
        message: "Hello",
        phone: "55454891919",
        status: "Atendimento",
        sector: 3,
        chatId: 155,
        created_at: "2021-01-01T00:00:00.000Z",
        updated_at: "2021-01-01T00:00:00.000Z",
      },
      {},
    ],
    message: "success",
  },
];

export const getConversations = [
  {
    success: true,
    data: [
      {
        sender: "Client",
        time: "10:00",
        sender_name: "Alice Johnson",
        message_type: "text",
        content: "Olá, como você está?",
      },
      {
        sender: "User",
        time: "10:02",
        sender_name: "Bob Smith",
        message_type: "image",
        content:
          "https://primefaces.org/cdn/primereact/images/galleria/galleria10.jpg",
      },
      {
        sender: "Client",
        time: "10:07",
        sender_name: "Alice Johnson",
        message_type: "image",
        content:
          "https://primefaces.org/cdn/primereact/images/galleria/galleria10.jpg",
      },
      {
        sender: "Client",
        time: "10:05",
        sender_name: "Alice Johnson",
        message_type: "file",
        content: "Também estou bem, obrigada!",
      },
      {
        sender: "Client",
        time: "10:07",
        sender_name: "Alice Johnson",
        message_type: "image",
        content:
          "https://primefaces.org/cdn/primereact/images/galleria/galleria10.jpg",
      },
      {
        sender: "User",
        time: "10:10",
        sender_name: "Bob Smith",
        message_type: "text",
        content: "Que legal! Onde foi tirada essa foto?",
      },
    ],
    message: "success",
  },
];

export const getGroups = [
  {
    success: true,
    data: [
      {
        id: 1234567890,
        name: "Meu Grupo",
        description: "Um grupo para amigos e familiares",
        members: [1234567890, 9876543210, 5555555555],
        last_message: {
          id: 1234567890,
          date: "2023-03-08T12:00:00Z",
          text: "Olá, pessoal!",
        },
      },
      {
        id: 9876543210,
        name: "Trabalho",
        description: "Um grupo para colegas de trabalho",
        members: [1234567890, 9876543210, 5555555555, 7777777777],
        last_message: {
          id: 9876543210,
          date: "2023-03-09T12:00:00Z",
          text: "A reunião do projeto foi remarcada para amanhã às 10h.",
        },
      },
      {
        id: 5555555555,
        name: "Faculdade",
        description: "Um grupo para alunos da faculdade",
        members: [1234567890, 9876543210, 5555555555, 7777777777],
        last_message: {
          id: 5555555555,
          date: "2023-03-10T12:00:00Z",
          text: "Alguém sabe onde posso encontrar o professor da matemática?",
        },
      },
    ],
    message: "success",
  },
];
