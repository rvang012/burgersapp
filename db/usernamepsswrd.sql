
grant all privileges on burgers . * to 'burger_admin'@'localhost';
alter user 'burger_admin'@'localhost' identified with mysql_native_password by 'password';
flush privileges;