module github.com/Tamplier2911/gochat/server

go 1.16

replace github.com/Tamplier2911/gorest/server/internal => ../../internal

replace github.com/Tamplier2911/gorest/server/pkg => ../../pkg

require (
	gorm.io/driver/mysql v1.1.2
	gorm.io/gorm v1.21.15
)
