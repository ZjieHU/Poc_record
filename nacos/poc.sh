#/bin/bash
a=`curl -v -k -X GET -H 'serverIdentity:security' -H 'User-Agent:Nacos-Server' 'http://'$0'/nacos/v1/auth/users/?pageNo=1&pageSize=9'`
echo $a
