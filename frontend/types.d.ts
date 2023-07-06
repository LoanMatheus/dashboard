type UserData = {
  status: string;
  data: [
    {
      id: number;
      email: string;
      name: string;
      role: number;
      isLogged: boolean;
      showAllClosedChats: boolean;
      showInactiveClosedChats: boolean;
      showAllContacts: boolean;
      showAllMessages: boolean;
      allowEmojis: boolean;
      userEnabled: boolean;
      sectors: [
        {
          id: number;
          name: string;
        }
      ];
    }
  ];
  userLog: number;
};
