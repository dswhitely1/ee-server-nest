import { MigrationInterface, QueryRunner } from 'typeorm';

export class myInit1585529261356 implements MigrationInterface {
  name = 'myInit1585529261356';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user" DROP CONSTRAINT "UQ_78a916df40e02a9deb1c4b75edb"`,
      undefined,
    );
    await queryRunner.query(
      `ALTER TABLE "user" DROP COLUMN "username"`,
      undefined,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ADD "username" character varying(20) NOT NULL`,
      undefined,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ADD CONSTRAINT "UQ_78a916df40e02a9deb1c4b75edb" UNIQUE ("username")`,
      undefined,
    );
    await queryRunner.query(
      `ALTER TABLE "user" DROP COLUMN "password"`,
      undefined,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ADD "password" character varying(100) NOT NULL`,
      undefined,
    );
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "role"`, undefined);
    await queryRunner.query(
      `ALTER TABLE "user" ADD "role" character varying(20) NOT NULL DEFAULT 'user'`,
      undefined,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "role"`, undefined);
    await queryRunner.query(
      `ALTER TABLE "user" ADD "role" character varying NOT NULL`,
      undefined,
    );
    await queryRunner.query(
      `ALTER TABLE "user" DROP COLUMN "password"`,
      undefined,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ADD "password" character varying NOT NULL`,
      undefined,
    );
    await queryRunner.query(
      `ALTER TABLE "user" DROP CONSTRAINT "UQ_78a916df40e02a9deb1c4b75edb"`,
      undefined,
    );
    await queryRunner.query(
      `ALTER TABLE "user" DROP COLUMN "username"`,
      undefined,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ADD "username" character varying NOT NULL`,
      undefined,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ADD CONSTRAINT "UQ_78a916df40e02a9deb1c4b75edb" UNIQUE ("username")`,
      undefined,
    );
  }
}
