create user 'ice_admin'@'localhost' identified by 'password';
grant all privileges on ice_creamdb . * to 'ice_admin'@'localhost';
alter user 'ice_admin'@'localhost' identified with mysql_native_password by 'password';
flush privileges;