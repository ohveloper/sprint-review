'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * 이번 스프린트에서 테스트 코드는 아래 제공된 데이터를 기준으로 진행됩니다.
     * 마이그레이션 및 시드를 적용한 다음 아래의 정보를 이용해서 로그인 요청을 해야 합니다.
     */
    return queryInterface.bulkInsert('Users', [
      {
        id: '0',
        userId: 'kimcoding',
        password: '1234',
        email: 'kimcoding@authstates.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Users', null, {});
  },
};
