

describe('Json Object', () => {
    it('Json Key Value', () => {
        cy.visit('https://google.com')

        const simpleObject={"key1":"deger1","key2":"deger2","key3":"deger3"}

        console.log(simpleObject.key1)
        console.log(simpleObject["key1"])

        const arrayDegerler=["ali","Esma","Berk","Fatma"]

        console.log(arrayDegerler[1])

        const arrayDegerler2=[{"e1":"Murat","e2":"Enes","e3":"Mustafa"},{"k1":"Sibel","k2":"Sena","k3":"emine"}]
        
        console.log(arrayDegerler2[0].e2)

        const body={
            "students":[
                {
                "firstName":"Esma",
                "secondName":"Sena",
                "lastName":"Yiğit"
                },
                {
                    "firstName":"Tarık",
                    "secondName":"Veli",
                    "lastName":"Yiğit"
                }
            ]
        }

        console.log(body.students[1].lastName)
    });
});