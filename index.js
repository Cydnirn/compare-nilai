const AgamaArr = [82, 81, 84, 84, 83, 86];
const PKNArr = [89, 90, 89, 85, 84, 81];
const BIndoArr = [86, 87, 87, 88, 85, 82];
const MtkArr = [93, 88, 85, 88, 89, 96];
const SejArr = [93, 82];
const EngArr = [78, 83, 88, 89, 86, 92, 90];
const SenbudArr = [86, 84];
const PJArr = [86, 84, 88, 87];
const SimdigArr = [89, 87];
const FisikaArr = [87, 89];
const KimArr = [90, 89];
const KeahlianArr = [89, 91, 86, 83, 89, 84, 82, 86];

const IassArr = [93, 91, 93, 93, 96];
const PaasArr = [92, 90, 91, 92, 98];
const SaasArr = [93, 90, 88, 88, 91];
const SiotArr = [91, 90, 90, 90, 92];
const SKJArr = [89, 86, 88, 90, 91];
const PKKArr = [81, 81, 81, 85, 91];

const AgamaRep = [82, 81, 84, 84, 83, 86];
const PKNRep = [89, 90, 89, 85, 84, 81];
const BIndoRep = [86, 87, 87, 88, 85, 82];
const MtkRep = [93, 88, 85, 88, 89, 96];
const SejRep = [93, 82];
const EngRep = [78, 83, 88, 89, 86, 92, 90];
const SenbudRep = [86, 84];
const PJRep = [86, 84, 88, 87];
const SimdigRep = [89, 87];
const FisikaRep = [87, 89];
const KimRep = [90, 89];
const KeahlianRep = [89, 91, 86, 83, 89, 84, 82, 86];

const IassRep = [93, 91, 93, 93, 96];
const PaasRep = [92, 90, 91, 92, 98];
const SaasRep = [93, 90, 88, 88, 91];
const SiotRep = [91, 90, 86, 90, 92];
const SKJRep = [89, 86, 88, 90, 91];
const PKKRep = [81, 81, 81, 85, 91];

function compareArr(agamaDB, agamaRep, title) {
    for (let i = 0; i < agamaDB.length; i++) {
        if (agamaDB.length !== agamaRep.length) {
            return console.log("Array tidak sama panjang");
        }
        if (agamaDB[i] === agamaRep[i]) {
            console.log(`${title} di semester ${i + 1} sesuai`);
        } else {
            console.log(`${title} di semester ${i + 1} tidak sesuai`);
        }
    }
}

compareArr(AgamaArr, AgamaRep, "Agama");
compareArr(PKNArr, PKNRep, "PKN");
compareArr(BIndoArr, BIndoRep, "Bahasa Indonesia");
compareArr(MtkArr, MtkRep, "Matematika");
compareArr(SejArr, SejRep, "Sejarah");
compareArr(EngArr, EngRep, "Bahasa Inggris");
compareArr(SenbudArr, SenbudRep, "Seni Budaya");
compareArr(PJArr, PJRep, "Pendidikan Jasmani");
compareArr(SimdigArr, SimdigRep, "Sistem Digital");
compareArr(FisikaArr, FisikaRep, "Fisika");
compareArr(KimArr, KimRep, "Kimia");
compareArr(KeahlianArr, KeahlianRep, "Keahlian");
compareArr(IassArr, IassRep, "IAAS");
compareArr(PaasArr, PaasRep, "PAAS");
compareArr(SaasArr, SaasRep, "SAAS");
compareArr(SiotArr, SiotRep, "SIOT");
compareArr(SKJArr, SKJRep, "SKJ");
compareArr(PKKArr, PKKRep, "PKK");
